import { IoIosSearch, IoMdHeartEmpty, IoIosArrowForward } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  function handleBurgerMenu() {
    setMenu(!menu);
  }
  return (
    <div>
      <nav className="flex justify-between items-center bg-white shadow-md p-4">
        <div className="flex items-center">
          <a href="/" className="logo w-[100px] mr-[24px]">
            <img
              className="w-[100px]"
              src="/assets/img/guesss.svg"
              alt="logo"
            />
          </a>
          <ul className="items-center max-w-[970px] w-full justify-start gap-4 pl-[15px] hidden lg:flex">
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">Handbags</a>
            </li>
            <li>
              <a href="/">Shoes</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Marciano</a>
            </li>
            <li>
              <a href="/">Guess Jeans</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="hidden lg:block">
            Hi,
            <a
              className="underline border-r py-[16px] pr-[31px] space-x-2 font-semibold"
              href="/"
            >
              Sign in or Register
            </a>
          </p>
          <ul className="flex items-center gap-4 pl-[16px]">
            <li className="">
              <IoIosSearch className="w-[28px] h-[24px] lg:w-[43px] lg:h-[34px]" />
            </li>
            <li>
              <IoMdHeartEmpty className="w-[28px] h-[24px] lg:w-[43px] lg:h-[34px]" />
            </li>
            <li>
              <BiBasket className="w-[28px] h-[24px] lg:w-[43px] lg:h-[34px]" />
            </li>
            <li onClick={handleBurgerMenu} className="lg:hidden">
              <GiHamburgerMenu className="w-[28px] h-[24px] lg:w-[43px] lg:h-[34px] cursor-pointer" />

              {menu && (
                <ul className="fixed left-0 bg-white w-full h-full p-4">
                  <li className="p-[15px] border-b border-[#eee]">
                    Hi,
                    <a
                      className="underline py-[16px] pr-[31px] space-x-2 font-semibold"
                      href="/"
                    >
                      Sign in or Register
                    </a>
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Women
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Handbags
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Shoes
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Men
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Marciano
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Guess Jeans
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                  <li className="flex justify-between items-center font-semibold p-[15px] border-b border-[#eee] cursor-pointer">
                    Store locations
                    <IoIosArrowForward className="w-[24px] h-[24px]" />
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
