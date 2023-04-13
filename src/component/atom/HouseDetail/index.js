import React from "react";

function HouseDetail({ icon, desc }) {
  return (
    <div className="w-[50%] flex items-center mt-5">
      {/* <i className="fa-solid fa-bed mr-2"></i> */}
      {icon}
      <p>{desc}</p>
    </div>
  );
}

export default HouseDetail;
