import React from "react";

function BtnPrimary({ title, arrow, icon }) {
  return (
    <button className="btn btn-primary !rounded-full text-[#FFFFFF] btn-active">
      {icon}
      {title}
      {arrow}
    </button>
  );
}

export default BtnPrimary;
