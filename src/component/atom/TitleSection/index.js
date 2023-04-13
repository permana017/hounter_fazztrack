import React from "react";

function TitleSection({ title, section }) {
  return (
    <div>
      <hr className="border-[1px] border-[#F59E0B]"></hr>
      <p className="mt-[-10px] text-sm bg-white ml-8 px-2 text-[#F59E0B]">
        {section}
      </p>
      <p className="text-[#1B1C57] font-bold text-3xl  pl-10">{title}</p>
    </div>
  );
}

export default TitleSection;
