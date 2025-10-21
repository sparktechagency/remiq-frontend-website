// import { redirect } from "next/navigation";

// export default function page() {
//   redirect("/messages/chat/1");
// }



import { Empty } from "antd";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-32">
      <Empty description="Select a chat from the sidebar to start messaging." />
    </div>
  );
}




