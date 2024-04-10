import React from "react";
import John from "../assests/banner.jpg";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[60vh] bg-center bg-cover flex items-end "
      style={{
        backgroundImage: `URL(${John})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full">
        {" "}
        John Wick
      </div>
    </div>
  );
}

export default Banner;
