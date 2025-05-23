"use client";

import Image, { StaticImageData } from "next/image";

interface BannerProps {
  type: "image" | "solid";
  bannerImage?: StaticImageData;
  solidText?: string;
}

const Banner = ({ type, bannerImage, solidText }: BannerProps) => {
  switch (type) {
    case "image":
      return (
        <div className="relative mt-10 w-full max-w-[85%]">
          {bannerImage && (
            <Image
              src={bannerImage}
              alt="Banner"
              width={900}
              height={301}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
          )}
        </div>
      );
    case "solid":
      return (
        <div className="relative mt-10 w-full h-[301px] bg-[#EA7C2D] rounded-lg p-6 flex items-center">
          <p className="text-[46px] font-bold text-white text-left">
            {solidText || "Seu Texto Grande"}
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default Banner;