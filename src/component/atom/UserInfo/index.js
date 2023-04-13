import React from "react";

function UserInfo({ ownerName, ownerPic, ownerAddrress }) {
  return (
    <div className="flex w-[250px] items-center">
      <img
        className="w-10 h-10 mr-3"
        src={require(`../../../assets/owner/${ownerPic}`)}
        alt=""
      />
      <div>
        <p className="text-[#0E1735] text-lg font-medium">{ownerName}</p>
        <p className="text-[#888B97] text-sm">{ownerAddrress}</p>
      </div>
    </div>
  );
}

export default UserInfo;
