import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { USER_ROLE } from "./constants/role";
import { authKey } from "./constants/storageKey";

const PUBLIC_ROUTES = ["/login", "/register"];
const ROLE_ROUTES = {
  [USER_ROLE.USER]: "/user",
  [USER_ROLE.ADMIN]: "/admin",
  [USER_ROLE.SUPER_ADMIN]: "/super_admin",
} as const;

const redirect = (url: string, request: NextRequest) =>
  NextResponse.redirect(new URL(url, request.url));

const isPublicRoute = (pathname: string) =>
  PUBLIC_ROUTES.some((route) => pathname === route);

const getUserDashboard = (role: string) =>
  ROLE_ROUTES[role as keyof typeof ROLE_ROUTES];

const hasRouteAccess = (role: string, pathname: string) => {
  const userDashboard = getUserDashboard(role);
  return userDashboard && pathname.startsWith(userDashboard);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = (await cookies()).get(authKey)?.value;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  // No token - allow public routes, block protected routes
  if (!accessToken) {
    return isPublicRoute(pathname)
      ? NextResponse.next({ request: { headers: requestHeaders } })
      : redirect("/login", request);
  }

  // Has token - decode and validate
  let role: string;
  try {
    const decoded = jwtDecode(accessToken) as { role: string };
    role = decoded.role;
  } catch {
    return redirect("/login", request);
  }

  if (!role || !getUserDashboard(role)) {
    return redirect("/login", request);
  }

  // Authenticated user trying to access login/register - redirect to dashboard
  if (isPublicRoute(pathname)) {
    return redirect("/", request);
  }

  // Check if user has access to the requested protected route
  if (hasRouteAccess(role, pathname)) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // No access to requested route - redirect to user's dashboard
  return redirect(getUserDashboard(role), request);
}

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
    "/super_admin/:path*",
    "/login",
    "/register",
  ],
};
