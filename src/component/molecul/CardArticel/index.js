import React from "react";
import UserInfo from "../../atom/UserInfo";

function CardArticel({
  title,
  time,
  userPic,
  userName,
  flex,
  picSize,
  fontSize,
  desc,
  textWidth,
  picture,
}) {
  return (
    <div className={`flex mb-[44px] w-full ${flex}`}>
      <img
        src={require(`../../../assets/image/${picture}`)}
        alt=""
        className={picSize}
      />
      <div className={textWidth}>
        <UserInfo ownerPic={userPic} ownerAddrress={userName} />
        <p className={`my-4 text-[#1B1C57] font-medium ${fontSize}`}>{title}</p>
        <p className="text-sm text-[#626687] font-normal mb-4">{desc}</p>
        <div className="flex items-center text-[#888B97]">
          <i class="fa-solid fa-clock mr-3"></i>
          <p className="text-sm">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default CardArticel;
