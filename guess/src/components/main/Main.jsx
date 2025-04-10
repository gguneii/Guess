import React from "react";
import BackgroundVideo from "./bgVideo";

function Main() {
  return (
    <>
      <div className="h-[100vh]">
        <BackgroundVideo />
      </div>

      <div>
        <p className="text-center py-10 text-[32px]">
          Desert Days, Dancefloor Nights
        </p>
        <div className="flex items-center overflow-x-auto gap-6 m-auto scrollbar max-w-[1024px] w-full px-[20px]">
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Dresses & Jumpsuits
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Handbags
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's Denim
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's Shorts
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's Shoes
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's SwimSear
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's Top
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Women's Apparel
          </a>
          <a
            className="rounded-[48px] whitespace-nowrap px-[20px] py-[14px] bg-[#efe7dc] text-center"
            href="#"
          >
            Men's Apparel
          </a>
        </div>
      </div>

      <div className="flex py-10">
      <img className="max-w-[33%]"
          src="https://img.guess.com/image/upload/q_auto,f_auto,dpr_auto,w_1280,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10461/G_Site_Home_ContentCenter_AprilV1_10461_04"
          alt="canta"
        />
        <img className="max-w-[33%]"
          src="https://img.guess.com/image/upload/q_auto,f_auto,dpr_auto,w_1280,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10461/G_Site_Home_ContentCenter_AprilV1_10461_03"
          alt="canta"
        />
        <img className="max-w-[33%]"
          src="https://img.guess.com/image/upload/q_auto,f_auto,dpr_auto,w_1280,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10461/G_Site_Home_ContentCenter_AprilV1_10461_04"
          alt="canta"
        />
      </div>
    </>
  );
}

export default Main;
