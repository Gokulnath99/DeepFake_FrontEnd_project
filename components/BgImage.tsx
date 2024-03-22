import Image from "next/image";
import React from "react";
import feature_image from "@/public/featured/feature1.png";

function BgImage() {
  return (
    <div className="max-h-screen snap-y snap-mandatory overflow-y-scroll">
      <div
        className="
          bg-gradient-to-tl from-[#00274C] to-[#145089]
          w-full
          h-screen
          absolute
          overflow-hidden
          -z-20
          snap-start
          "
      >
        <Image
          src={feature_image}
          alt={"feature1"}
          className="mix-blend-overlay blur"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default BgImage;
