import React from "react";
import BtnPrimary from "../../atom/BtnPrimary";

function Input({ placeholder, icon, titleBtn, arrow }) {
  return (
    <div className="border-[1px] rounded-full flex items-center my-8 p-[2px]">
      <div>
        {icon}
        {/* <i className="fa-solid fa-location-dot fa-xl text-[#F59E0B] ml-3"></i> */}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="input w-full focus:outline-none bg-transparent"
      />
      <BtnPrimary
        title={titleBtn}
        arrow={arrow}
        // arrow={<i className="fa-solid fa-chevron-right ml-4"></i>}
      />
    </div>
  );
}

export default Input;
