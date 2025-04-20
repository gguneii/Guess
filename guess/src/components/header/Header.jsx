import {
  IoIosSearch,
  IoMdHeartEmpty,
  IoIosArrowForward,
  IoMdClose,
} from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Link, useParams } from "react-router";

function Header() {
  const { category } = useContext(DATA);
  const [menu, setMenu] = useState(false);

  function handleBurgerMenu() {
    setMenu(!menu);
  }

  return (
    <div>
      <nav className="flex justify-between items-center bg-white shadow-md p-2">
        <div className="flex items-center">
          <a href="/" className="logo w-[100px] mr-[24px]">
            <img
              className="w-[100px]"
              src="/assets/img/guesss.svg"
              alt="logo"
            />
          </a>

          <ul className="hidden lg:flex">
            {category
              ? category.map((item, i) => (
                  <li
                    key={i}
                    className="group text-[.875rem] hover:underline border-b border-b-transparent hover:border-b-[#000] py-4 tracking-[.2em] px-3 cursor-pointer "
                  >
                    {item.name}
                    <div className="absolute w-full top-[57px] left-0 group-hover:block hidden z-50 p-[30px] bg-[#fff] ">
                      <div className="flex">
                        <ul className="!px-[80px]">
                          <Link to={`/product/all/${item.id}`}>
                            <li className="font-[600] pb-[8px] hover:underline">
                              View all
                            </li>
                          </Link>
                          {item.Subcategory.map((s, i) => {
                            return (
                              <Link key={i} to={`/product/${s.id}`}>
                                <li className="py-[8px] hover:underline">
                                  {s.name}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                        <img
                          className="w-[384px]"
                          src={`/assets/img/headerList${i}.webp`}
                          alt="img"
                        />
                      </div>
                    </div>
                  </li>
                ))
              : ""}
          </ul>
        </div>

        <div className="flex items-center">
          <p className="hidden lg:block">
            Hi,
            <a
              className="tracking-[.05em] underline pl-[3px] border-r py-[16px] pr-[31px] space-x-2 font-semibold"
              href="/"
            >
              Sign in or Register
            </a>
          </p>
          <ul className="flex items-center gap-4 pl-[16px]">
            <li>
              <IoIosSearch className="w-[28px] h-[24px] lg:w-[43px] lg:h-[30px]" />
            </li>
            <li>
              <IoMdHeartEmpty className="w-[28px] h-[24px] lg:w-[43px] lg:h-[30px]" />
            </li>
            <li>
              <BiBasket className="w-[28px] h-[24px] lg:w-[43px] lg:h-[30px]" />
            </li>
            <li onClick={handleBurgerMenu} className="lg:hidden">
              <GiHamburgerMenu className="w-[28px] h-[24px] lg:w-[43px] lg:h-[34px] cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>

      <div>
        {menu && (
          <ul className="fixed left-0 bg-white w-full h-full p-4 z-[999] top-[0]">
            <li
              onClick={handleBurgerMenu}
              className="absolute top-2 right-6 font-bold text-[24px] text-black cursor-pointer"
            >
              X
            </li>
            <li className="p-[15px] border-b mt-[20px] border-[#eee]">
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
      </div>
    </div>
  );
}

export default Header;
