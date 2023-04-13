import React from "react";
import BtnGhost from "../../component/atom/BtnGhost";
import BtnPrimary from "../../component/atom/BtnPrimary";
import HouseDetail from "../../component/atom/HouseDetail";
import TitleSec from "../../component/atom/TitleSec";
import TitleSection from "../../component/atom/TitleSection";
import UserInfo from "../../component/atom/UserInfo";
import CardArticel from "../../component/molecul/CardArticel";
import CardReview from "../../component/molecul/CardReview";
import Footer from "../../component/molecul/Footer";
import Input from "../../component/molecul/Input/undex";
import Navbar from "../../component/molecul/Navbar";
import Recommendation from "../../component/molecul/Recomendation";
import artikel from "../../data/artikel";
import houseDetail from "../../data/houseDetail";
import propertyHouse from "../../data/propertyHouse";
import Review from "../../data/review";
import sponsored from "../../data/sponsored";
import "../Home/style.css";

function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <section className="container w-full relative">
        <div className="w-full flex justify-between">
          <div className="w-1/2 pt-[182px] pr-[104px] relative">
            <img
              src={require("../../assets/blur/hero-banner.png")}
              className="absolute -z-10 top-0 -left-[120px]"
              alt=""
            />
            <div>
              <p className="w-[70%] text-[#1B1C57] text-[40px] font-bold">
                Find the place to live
                <span className="font-outline"> Your Dreams </span>
                easily here
              </p>
              <p className="mt-6 text-base text-[#626687]">
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
            </div>
            <Input
              placeholder="Search for the location you want!"
              arrow={<i className="fa-solid fa-chevron-right ml-4"></i>}
              titleBtn="search"
              icon={
                <i className="fa-solid fa-location-dot fa-xl text-[#F59E0B] ml-3"></i>
              }
            />
            <div>
              <p className="text-[#888B97]">Our Partnership </p>
              <div className="flex justify-between items-center py-6 w-[85%]">
                {sponsored.map((item, i) => (
                  <img
                    key={i}
                    src={require(`../../assets/logo/${item.url}`)}
                    alt={item.alt}
                    width={83}
                    height={64}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-banner-house bg-cover h-[800px] absolute right-0 -z-10"></div>
        </div>
      </section>
      <section className="container mt-[240px] mb-10 ">
        <div className="flex w-full justify-between items-end">
          <TitleSection
            title={"Featured House"}
            section={"Our Recommendation"}
          />
          <div className="flex justify-between w-1/4">
            <BtnGhost
              icon={<i className="fa-solid fa-house fa-xs mr-2"></i>}
              title="House"
            />
            <BtnGhost
              icon={<i className="fa-solid fa-building fa-xs mr-2"></i>}
              title="Villa"
            />
            <BtnGhost
              icon={<i className="fa-solid fa-building fa-xs mr-2"></i>}
              title="Apartment"
            />
          </div>
          <div className="w-24 flex justify-between">
            <BtnPrimary arrow={<i className="fa-solid fa-chevron-left"></i>} />
            <BtnPrimary arrow={<i className="fa-solid fa-chevron-right"></i>} />
          </div>
        </div>
        <div className="mt-10 flex w-full ">
          <div className="carousel rounded-box">
            {propertyHouse.map((item, i) => (
              <div className="carousel-item mr-20">
                <Recommendation
                  ownerName={item.owner.name}
                  name={item.name}
                  ownerAddrress={item.owner.address}
                  ownerPic={item.owner.picture}
                  picture={item.picture.url}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mt-[80px] mb-10 relative">
        <img
          className="-z-10 absolute right-0 -top-[250px]"
          src={require("../../assets/blur/section2(1).png")}
          alt=""
        />
        <img
          className="-z-10 absolute right-0 -top-40"
          src={require("../../assets/blur/section2(1).png")}
          alt=""
        />
        <div className="w-full flex justify-between">
          <div className="w-1/2 pt-16">
            <TitleSection
              title="Let’s tour and see our house!"
              section="Ready to Sell!"
            />
            <div className="px-10">
              <p className="mt-4 text-[#626687] text-sm font-normal w-[65%]">
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
              <p className="text-base font-semibold tex-[#1B1C57] mt-4">
                House Detail
              </p>
              <div className="flex flex-wrap w-full">
                {houseDetail.map((item, i) => (
                  <HouseDetail desc={item.desc} icon={item.icon} />
                ))}
              </div>
              <div className="flex mt-10">
                <UserInfo
                  ownerPic={propertyHouse[0].owner.picture}
                  ownerName={propertyHouse[0].owner.name}
                  ownerAddrress={propertyHouse[0].owner.address}
                />
                <BtnPrimary
                  title="Contact Now"
                  icon={<i class="fa-solid fa-phone mr-3"></i>}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img
              src={require("../../assets/image/houseDetail.png")}
              className="w-[75%] h-full"
              alt="housedetail"
            />
          </div>
        </div>
      </section>
      <section className="mt-[80px] mb-[120px] max-w-[1500px] overflow-hidden">
        <div className="container">
          <TitleSec
            title="What Our User Say About Us"
            section="See Our Review"
          />
        </div>
        <div className="flex justify-center w-full mt-10">
          <div className="carousel carousel-center w-full space-x-4 bg-base-100 rounded-box">
            {Review.map((item, i) => (
              <div
                key={i}
                className="carousel-item w-[60%] flex justify-center"
              >
                <CardReview
                  desc={item.desc}
                  picture={item.picture.url}
                  rating={item.rating}
                  reviewJob={item.reviewer.jobTitle}
                  reviewName={item.reviewer.name}
                  reviewPic={item.reviewer.picture}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mb-28 relative">
        <img
          src={require("../../assets/blur/artikel.png")}
          className="absolute left-0 -z-10 -top-28"
          alt=""
        />
        <img
          src={require("../../assets/blur/artikel2.png")}
          className="absolute left-0 -z-20 top-20"
          alt=""
        />
        <div className="flex flex-col items-center">
          <TitleSec
            section="See tips and trick from our partnership"
            title={"Find out more about"}
            title2={"selling and buying homes"}
          />
          <div className="mt-6 mb-12">
            <BtnPrimary title={"More Artikel"} />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-1/2 pr-10">
            {artikel.map((item, i) => (
              <CardArticel
                picture={item.picture.url}
                userPic={item.user.picture}
                title={item.title}
                userName={item.user.name}
                time={item.time}
                flex="justify-between"
                picSize="w-[33%]"
                textWidth="w-[62%]"
                fontSize="text-lg"
                key={i}
              />
            ))}
          </div>
          <div className="w-1/2 pl-14">
            <CardArticel
              picture="articel4.webp"
              userPic="5.png"
              title="12 Things to know before buying a house"
              userName="Cameron Williamson"
              time="8 min read | 25 Apr 2021"
              desc="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
              flex="flex-col"
              picSize="mb-6"
              fontSize="text-2xl"
            />
          </div>
        </div>
      </section>
      <section className="container mb-[120px]">
        <div className="w-full flex flex-col items-center">
          <img
            src={require("../../assets/banner/Subscribe.webp")}
            alt=""
            className=""
          />
          <div className="w-1/3 -mt-[250px]">
            <p className="text-[#1B1C57] text-3xl font-semibold text-center">
              Subscribe For More Info <br /> and update from Hounter
            </p>
            <Input
              placeholder="Your email here"
              titleBtn="Subsribe Now"
              icon={<i class="fa-solid fa-envelope text-[#3B82F6]"></i>}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
