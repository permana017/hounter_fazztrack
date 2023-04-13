import React from "react";

function BtnGhost({ title, icon }) {
  return (
    <button className="flex items-center h-[34px] active:bg-primary hover:bg-[#D1FAE5] px-4 border-[#888B97] hover:border-[#F0F3FD] border-[2px] hover:text-primary !rounded-full text-[#888B97]">
      {icon}
      {title}
    </button>
  );
}

export default BtnGhost;
