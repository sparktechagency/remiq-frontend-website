import { TrackDetailPage } from "@/components/primaryLayout/track-details";
import { mockCollection } from "@/constants/collection";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function page({ params }: PageProps) {
  const { id } = await params;
  console.log(id);
  return (
    <>
      <TrackDetailPage collection={mockCollection} isBeatsPage={true} />
    </>
  );
}
