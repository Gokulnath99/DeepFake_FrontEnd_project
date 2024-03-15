import Image from "next/image";
import React from "react";
import feature_image from "@/public/featured/feature1.png";

function BgImage() {
  return (
    <div
      className="
        bg-gradient-to-tl from-[#00274C] to-[#145089]
        w-full
        h-screen
        absolute
        overflow-hidden
        -z-20
        "
    >
      <Image
        src={feature_image}
        alt={"feature1"}
        style={{ objectFit: "fill" }}
        className="mix-blend-overlay blur"
      />
    </div>
  );
}

export default BgImage;
