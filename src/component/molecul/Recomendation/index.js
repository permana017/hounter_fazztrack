import React from "react";
import UserInfo from "../../atom/UserInfo";

function Recommendation({
  name,
  picture,
  price,
  ownerAddrress,
  ownerName,
  ownerPic,
}) {
  return (
    <div>
      <img
        width={340}
        height={382}
        src={require(`../../../assets/image/${picture}`)}
        alt=""
      />
      <p className="text-[#0E1735] text-xl font-medium mt-6">{name}</p>
      <p className="text-[#3C4563]  text-[20px] mb-6">{price}</p>
      <UserInfo
        ownerName={ownerName}
        ownerAddrress={ownerAddrress}
        ownerPic={ownerPic}
      />
    </div>
  );
}

export default Recommendation;
