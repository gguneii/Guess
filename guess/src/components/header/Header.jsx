import { IoIosSearch, IoMdHeartEmpty, IoIosArrowForward } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Link } from "react-router";

function Header() {
  const { category } = useContext(DATA);
  const [menu, setMenu] = useState(false);
  function handleBurgerMenu() {
    setMenu(!menu);
  }

  const [activeIndex, setActiveIndex] = useState(null);

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
            {category &&
              category.map((item, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <Link to={"/"}>{item.name}</Link>
                </li>
              ))}
          </ul>

          {/* <div className="absolute top-[66px] left-0 w-full bg-white z-[5]">

            <div className="flex gap-[25px] ml-34 w-full bg-white pb-8">
              <div>
                <h4 className="font-semibold pb-2">All Handbags</h4>
                <a href="/" className="text-[13px] block">
                  View All
                </a>
                <a href="/" className="text-[13px] block">
                  New Arrivals
                </a>
                <a href="/" className="text-[13px] block">
                  The It Bag
                </a>
                <a href="/" className="text-[13px] block">
                  CrossBodies
                </a>
                <a href="/" className="text-[13px] block">
                  Shoulder Bags
                </a>
                <a href="/" className="text-[13px] block">
                  Evening Bags
                </a>
                <a href="/" className="text-[13px] block">
                  Totes
                </a>
                <a href="/" className="text-[13px] block">
                  Wallets
                </a>
                <a href="/" className="text-[13px] block">
                  Travels Techs
                </a>
                <a href="/" className="text-[13px] block">
                  Logo Bags
                </a>
              </div>
            </div>

            <div className="flex gap-[25px] ml-34 w-full bg-white pb-8">
              <div>
                <h4 className="font-semibold pb-2">All Handbags</h4>
                <a href="/" className="text-[13px] block">
                  View All
                </a>
                <a href="/" className="text-[13px] block">
                  New Arrivals
                </a>
                <a href="/" className="text-[13px] block">
                  The It Bag
                </a>
                <a href="/" className="text-[13px] block">
                  CrossBodies
                </a>
                <a href="/" className="text-[13px] block">
                  Shoulder Bags
                </a>
                <a href="/" className="text-[13px] block">
                  Evening Bags
                </a>
                <a href="/" className="text-[13px] block">
                  Totes
                </a>
                <a href="/" className="text-[13px] block">
                  Wallets
                </a>
                <a href="/" className="text-[13px] block">
                  Travels Techs
                </a>
                <a href="/" className="text-[13px] block">
                  Logo Bags
                </a>
              </div>
            </div>

          </div> */}
        </div>
        {category &&
          category.map((item, i) => (
            <div
              key={item.id}
              className={`absolute top-[66px] left-0 w-full bg-white z-[5] transition-all duration-300 ${
                activeIndex === i
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex gap-[25px] ml-34 w-full bg-white pb-8 pl-6">
                <div>
                  <h4 className="font-semibold pb-2">
                    {item.name} Subcategories
                  </h4>
                  {item.Subcategory?.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/subcategory/${sub.slug}`}
                      className="text-[13px] block hover:underline"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

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
