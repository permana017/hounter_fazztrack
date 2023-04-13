import React from "react";

function BtnOutline({ title, icon }) {
  return (
    <button className="h-[34px] active:bg-primary hover:bg-primary px-4 hover:border-[#F0F3FD] border-[2px] !rounded-full text-[#F0F3FD]">
      {icon}
      {title}
    </button>
  );
}

export default BtnOutline;
