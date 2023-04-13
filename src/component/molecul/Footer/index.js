import React from "react";
import Logo from "../../atom/Logo";

function Footer() {
  const Title = ({ title }) => (
    <p className="text-[#0E1735] font-semibold text-lg mb-6">{title}</p>
  );
  const ItemMenu = ({ menu }) => (
    <p className="text-[#888B97] text-sm font-norma mb-5">{menu}</p>
  );

  return (
    <section className="container mt-[120px]">
      <div className="flex justify-between w-full relative mb-10">
        <div className="flex flex-col w-1/2">
          <Logo />
          <p>
            We provide information about properties such <br /> as houses,
            villas and apartments to help people <br /> find their dream home
          </p>
          <div className="flex">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="w-1/2 flex justify-between">
          <div className="">
            <Title title="Property" />
            <ItemMenu menu="House" />
            <ItemMenu menu="Apartment" />
            <ItemMenu menu="Villa" />
          </div>
          <div className="">
            <Title title="Article" />
            <ItemMenu menu="New Article" />
            <ItemMenu menu="Popular Article" />
            <ItemMenu menu="Most Read" />
            <ItemMenu menu="Tips & Tricks" />
          </div>
          <div className="">
            <Title title="Contact" />
            <ItemMenu menu="2464 Royal Ln. Mesa, New Jersey 45463" />
            <ItemMenu menu="(671) 555-0110" />
            <ItemMenu menu="info@hounter.com" />
          </div>
        </div>
        <div className="absolute -right-[110px] -bottom-10">
          <img src={require("../../../assets/blur/Footer2.png")} alt="" />
        </div>
        <div className="absolute -right-[120px] -bottom-10">
          <img src={require("../../../assets/blur/Footer1.png")} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
