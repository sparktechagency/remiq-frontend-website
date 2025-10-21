import { CollectionPage } from "@/components/primaryLayout/collection";
import { mockCollection } from "@/constants/collection";
import React from "react";

export default function page() {
  return (
    <section>
      <CollectionPage collection={mockCollection} />
    </section>
  );
}
