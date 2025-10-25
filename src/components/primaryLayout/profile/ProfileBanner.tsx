import Image from "next/image";
import React from "react";

const ProfileBanner = () => {
  return (
    <div>
      <div className="h-[210px]">
        <Image
          width={1200}
          height={210}
          src="/profile/profileBanner.png"
          alt=""
          className="h-full w-full object-cover lg:object-fill"
        />
      </div>
    </div>
  );
};

export default ProfileBanner;
