import React from "react";

function TitleSec({ title, section, title2 }) {
  return (
    <div className="flex flex-col items-center">
      <hr className="border-[#F59E0B] w-8"></hr>
      <p className="text-sm text-[#F59E0B]">{section}</p>
      <p className="text-[#1B1C57] font-bold text-3xl max-w-[422px] text-center">
        {title}
        <br />
        {title2}
      </p>
    </div>
  );
}

export default TitleSec;
