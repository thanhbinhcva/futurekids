import React from "react";
import sample1 from "../assets/wedo.jpg"; // ảnh bên dưới
import sample2 from "../assets/wedo2.jpg"; // ảnh chồng lên

const OverlappingImages = () => {
  return (
    <div className="relative w-fit h-fit">
      {/* Hình ảnh phía dưới */}
      <img
        src={sample1}
        alt="Base"
        className="w-64 h-auto object-contain rounded-lg shadow-lg"
      />

      {/* Hình ảnh phía trên, chồng lệch */}
      <img
        src={sample2}
        alt="Overlay"
        className="absolute -top-8 -right-8 w-40 h-auto object-contain rounded-lg shadow-xl"
      />
    </div>
  );
};

export default OverlappingImages;
