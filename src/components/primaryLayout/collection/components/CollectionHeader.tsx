"use client";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Collection } from "@/constants/global";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

interface CollectionHeaderProps {
  collection: Collection;
  onBuyAll?: () => void;
}

export function CollectionHeader({
  collection,
  onBuyAll,
}: CollectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Sound Kits</h2>
        <p className="text-slate-400 text-sm">
          {collection.tracks.length} tracks available
        </p>
      </div>
      <PrimaryButton
        onClick={onBuyAll}
        size="large"
        text={`Buy All - ${collection.totalPrice}`}
        icon={<ShoppingCartOutlined />}
      />
    </div>
  );
}
