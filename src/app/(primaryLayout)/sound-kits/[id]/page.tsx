import { TrackDetailPage } from "@/components/primaryLayout/track-details";
import { mockCollection } from "@/constants/collection";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return <TrackDetailPage collection={mockCollection}  />
}
