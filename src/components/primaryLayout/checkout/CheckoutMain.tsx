"use client";

import { Button, Empty, Popconfirm, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

// Demo items
const demoItems = [
  {
    id: 1,
    title: "Lo-Fi Chill Beat Pack",
    artist: "BeatMaker Pro",
    price: 29.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 2,
    title: "Trap Drum Kit Vol.1",
    artist: "808 Labs",
    price: 49.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 3,
    title: "Hip-Hop Loops Pack",
    artist: "Urban Sounds",
    price: 39.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 4,
    title: "EDM Synth Presets",
    artist: "ElectroFX",
    price: 59.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 5,
    title: "Jazz Sample Kit",
    artist: "Smooth Grooves",
    price: 34.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 6,
    title: "Cinematic Sound FX Pack",
    artist: "FilmScore Labs",
    price: 79.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 7,
    title: "Vintage Vinyl Drum Loops",
    artist: "RetroBeats",
    price: 24.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 8,
    title: "Future Bass Sample Pack",
    artist: "SynthWave",
    price: 44.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
  {
    id: 9,
    title: "Ambient Pads Collection",
    artist: "SoundScape",
    price: 39.99,
    image:
      "https://i.ibb.co.com/tM193D3M/78bb5b697bbe4652a71dbd70fac66e63d7ab9c55.jpg",
  },
];

export function CheckoutMain() {
  const [items, setItems] = useState(demoItems);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const finalTotal = subtotal - discount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE30") {
      setDiscount(30);
    } else {
      setDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-slate-100 mb-8">Cart</h1>
          <Empty
            description="Your cart is empty"
            style={{ marginTop: "50px" }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          >
            <Link href="/">
              <Button type="primary" size="large">
                Continue Shopping
              </Button>
            </Link>
          </Empty>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-8 lg:pb-0">
      <h1 className="text-2xl font-bold text-slate-100 mb-8">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 lg:max-h-[calc(100vh-170px)] lg:overflow-auto">
          <div className="space-y-4">
            {items?.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                {/* Item Image */}
                <div className="w-20 h-20 rounded bg-slate-700 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full lg:items-center gap-2 lg:gap-4">
                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-100 truncate text-wrap">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400">{item.artist}</p>
                  </div>
                  <div className="flex items-center justify-between lg:justify-start gap-4">
                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm font-semibold text-blue-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    {/* Remove Button */}
                    <Popconfirm
                      title="Remove item"
                      description="Are you sure you want to remove this item?"
                      onConfirm={() => removeItem(item.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="text"
                        icon={<Trash2 />}
                        size="small"
                        className="!text-slate-400 hover:!text-red-500"
                      />
                    </Popconfirm>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6">
            {/* Promo Code Section */}
            <div className="mb-6">
              <div className="flex gap-2">
                <Input
                  placeholder="Apply Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className=" headerSearch !bg-transparent !text-white !border-[#7085FE]"
                />
                <PrimaryButton
                  text="Apply"
                  onClick={handleApplyPromo}
                  className=""
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-300">Items Total</span>
                <span className="text-slate-100 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-300">Discount</span>
                  <span className="text-slate-100 font-medium">
                    - ${discount.toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 pt-4 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-300">Sub Total</span>
                <span className="text-slate-100 font-semibold">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" className="block">
              <PrimaryButton
                size="large"
                text="Check Out"
                className="h-10 w-full text-base font-semibold"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
