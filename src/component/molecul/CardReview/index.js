import React from "react";
import UserInfo from "../../atom/UserInfo";

function CardReview({
  title,
  desc,
  picture,
  reviewPic,
  reviewName,
  reviewJob,
  rating,
}) {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={require(`../../../assets/image/${picture}`)}
        className="w-[720px] h-[400px] rounded-2xl"
        alt=""
      />
      <div className="card w-[612px] bg-base-100 shadow-xl -mt-[140px]">
        <div className="card-body">
          <h2 className="card-title text-[#1B1C57]">{title}</h2>
          <p className="text-sm font-normal text-[#626687]">{desc}</p>
          <div className="flex w-full justify-between mt-6">
            <UserInfo
              ownerPic={reviewPic}
              ownerName={reviewName}
              ownerAddrress={reviewJob}
            />
            <div className="flex items-center">
              <i class="fa-solid fa-star mr-3 text-[#F59E0B]"></i>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
