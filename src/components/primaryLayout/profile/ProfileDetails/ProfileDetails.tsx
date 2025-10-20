"use client";
import React, { useState } from "react";
import Beats from "./Beats";
import SoundKits from "./SoundKits";
import Collection from "./Collection";

type TabKey = "beats" | "kits" | "collection";

const TABS: { key: TabKey; label: string }[] = [
  { key: "beats", label: "Beats" },
  { key: "kits", label: "Sound Kits" },
  { key: "collection", label: "Collection" },
];

const ProfileDetails: React.FC = () => {
  const [active, setActive] = useState<TabKey>("beats");

  return (
    <div className="w-full h-full mt-6">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Profile sections"
        className="inline-flex rounded-md   text-[#9C9C9C] border-b border-white/10  w-full"
      >
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.key)}
              className={
                "px-4 pt-2 text-sm font-medium transition-colors !pb-2.5 " +
                (isActive
                  ? "text-white font-medium border-b-2 border-[#7085FE] "
                  : " ")
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div className="mt-4 pb-5" role="tabpanel">
        {active === "beats" && <Beats />}
        {active === "kits" && <SoundKits />}
        {active === "collection" && <Collection />}
      </div>
    </div>
  );
};

export default ProfileDetails;