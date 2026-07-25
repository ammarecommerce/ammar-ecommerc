import React from "react";

/* Placeholder for the founder's photo.
   Replace with: <img src="/founder.jpeg" alt="Muhammad Ammar Hassan" className="w-full h-full object-cover" />
   once you add your photo file to the project's /public folder. */
const FounderPhoto = ({ className = "" }) => (
  <img
    src="/FounderPhoto.jpeg"
    alt="Muhammad Ammar Hassan"
    className={`w-full h-full object-cover rounded-2xl ${className}`}
  />
);

export default FounderPhoto;
