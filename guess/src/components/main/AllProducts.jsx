import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CiHeart } from "react-icons/ci";
import { getAllProducts } from "../../services/api";

function AllProducts() {
  const { catId } = useParams();
  const [products, setProducts] = useState(null);
  const initialObj = {
    size: true,
    color: false,
    discount: false,
    price: false,
    wiew: false,
    featured: false,
  };
  const [filter, setFilter] = useState(initialObj);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts(products?.slice(0, 10));
  }, [products]);
  function viewProducts(num) {
    setDisplayedProducts(products.slice(0, num));
  }

  const [allFilters, setAllFilters] = useState({
    sizes: [],
    colors: [],
    discount: false,
    priceRange: [0, 100],
  });

  const handleSize = (size) => {
    setAllFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  useEffect(() => {
    if (catId) {
      getAllProducts(catId).then((res) => setProducts(res.data));
    }
  }, [catId]);

  return (
    <>
      <div className="flex justify-end">
        <div className="w-[80%] max-1024:w-full pt-[70px] pb-[40px] flex justify-between  pl-[40px] pr-[16px] max-1024:pl-0 ">
          <span>(28 styles)</span>
          <div className="flex gap-[15px]">
            <div className="flex items-center relative max-1024:hidden">
              <div
                onClick={() => setFilter({ ...filter, view: !filter.view })}
                className="flex items-center cursor-pointer"
              >
                <span className="underline">View 10</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-[17px] ml-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </div>
              {filter.view && (
                <div className="bg-white border  absolute top-[33px] left-0 w-[100px] z-10">
                  {[5, 10, 15].map((num) => {
                    return (
                      <p
                        key={num}
                        onClick={() => {
                          viewProducts(num),
                            setFilter({ ...filter, view: false });
                        }}
                        className="py-[5px] px-[20px] hover:bg-gray-100 cursor-pointer"
                      >
                        View {num}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex items-center max-1024:hidden ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
              <select className="outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span>of 3</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center relative gap-[15px] ">
            <div className="max-1024:hidden">
              <span>View</span>
              <span className="  cursor-pointer px-[5px]">2</span>
              <span className="font-bold  cursor-pointer px-[5px] border-l border-r">
                4
              </span>
              <span className="cursor-pointer px-[5px]">6</span>
            </div>
            <div className="">
              <p
                onClick={() =>
                  setFilter({ ...filter, featured: !filter.featured })
                }
                className=" cursor-pointer flex items-center underline max-1024:hidden "
              >
                Featured
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="ml-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </p>
              {filter.featured && (
                <div className="bg-white border  z-40 absolute top-[23px] w-full left-0">
                  <p 
                  onClick={() => setFilter({ ...filter, featured: false })}
                  className="py-[5px] px-[10px]  hover:bg-gray-100  cursor-pointer">
                    Price: low to high
                  </p>
                  <p
                  onClick={() => setFilter({ ...filter, featured: false })}
                  className="py-[5px] px-[10px]  hover:bg-gray-100  cursor-pointer">
                    Price: high to low
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] flex gap-[50px] m-auto ">
        <div className="w-[20%]">
          <div className="items-center border-b py-4">
            <div
              onClick={() => setFilter({ ...filter, size: !filter.size })}
              className="flex cursor-pointer justify-between items-center"
            >
              <p className="text-[17px]">Size</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className={`text-[20px] duration-500 cursor-pointer ${
                  filter.size ? "rotate-180" : "rotate-0"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </div>
            {filter.size && (
              <div className="transition-all duration-500 ease-in-out  overflow-hidden max-h-[300px]">
                {["S", "M", "L", "XL", "XXL"].map((size) => {
                  return (
                    <div
                      key={size}
                      onClick={() => handleSize(size)}
                      className="flex items-center mb-[5px] mt-[10px] cursor-pointer"
                    >
                      <div className="w-[16px] flex items-center justify-center h-[16px] rounded-[50%] border border-black mr-[10px]">
                        {allFilters.sizes.includes(size) && (
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="text-[10px] "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                          </svg>
                        )}
                      </div>
                      <span className="text-[13px]">{size}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="items-center border-b py-4">
            <div
              onClick={() => setFilter({ ...filter, color: !filter.color })}
              className="flex cursor-pointer justify-between"
            >
              <p className="text-[17px]">Color</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className={`text-[20px] duration-500 cursor-pointer ${
                  filter.color ? "rotate-180" : "rotate-0"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </div>
            {filter.color ? (
              <div className="transition-all duration-500 ease-in-out  overflow-hidden max-h-[300px]">
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] bg-[green] flex items-center justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokewidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Green</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex bg-[red] items-center justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Red</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex bg-[blue] items-center justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Blue</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex bg-[yellow] items-center justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Yellow</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[black] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Black</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[white] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">White</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[orange] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Orange</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[purple] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Purple</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[indigo] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Indigo</span>
                </div>
                <div className="flex items-center mb-[5px] mt-[10px] cursor-pointer  ">
                  <div className="w-[16px] flex items-center bg-[violet] justify-center h-[16px] rounded-[50%]  mr-[10px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[10px] text-[#fff] "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                  </div>
                  <span className="text-[13px]">Violet</span>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>

          <div className="border-b border-black py-4 relative ">
            <div
              onClick={() =>
                setFilter({ ...filter, discount: !filter.discount })
              }
              className="flex cursor-pointer justify-between items-center"
            >
              <p className="text-[17px]">Discount</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className={`text-[20px] duration-500 ${
                  filter.discount ? "rotate-180" : "rotate-0"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </div>
            {filter.discount && (
              <div className="transition-all duration-500 ease-in-out overflow-hidden">
                <div className="flex items-center py-[12px]">
                  <div className="w-[16px] flex items-center justify-center h-[16px] rounded-[50%] border border-black mr-[10px]">
                    {allFilters.discount && (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-[10px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    )}
                  </div>
                  <span
                    onClick={() =>
                      setAllFilters({
                        ...allFilters,
                        discount: !allFilters.discount,
                      })
                    }
                    className="text-[14px] cursor-pointer"
                  >
                    Discount
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-black py-4 relative mb-[50px]">
            <div
              onClick={() => setFilter({ ...filter, price: !filter.price })}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-[17px] ">Price</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className={`text-[20px] duration-500 ${
                  filter.price ? "rotate-180" : "rotate-0"
                } `}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </div>
            {filter.price && (
              <div className="transition-all duration-500 ease-in-out  overflow-hidden max-h-[300px]">
                <div>
                  <div>
                    <div className="flex  cursor-pointer items-center my-[8px]">
                      <div className="w-[16px] flex items-center justify-center h-[16px]  rounded-[50%] border border-black mr-[10px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-[10px] "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </div>
                      <div className="text-[14px]">
                        <span>25$</span>
                        <span className="mx-[5px]">-</span>
                        <span>50$</span>
                      </div>
                    </div>
                    <div className="flex  cursor-pointer items-center my-[8px]">
                      <div className="w-[16px] flex items-center justify-center h-[16px]  rounded-[50%] border border-black mr-[10px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-[10px] "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </div>
                      <div className="text-[14px]">
                        <span>50$</span>
                        <span className="mx-[5px]">-</span>
                        <span>100$</span>
                      </div>
                    </div>
                    <div className="flex  cursor-pointer items-center my-[8px]">
                      <div className="w-[16px] flex items-center justify-center h-[16px]  rounded-[50%] border border-black mr-[10px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-[10px] "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </div>
                      <div className="text-[14px]">
                        <span>100$</span>
                        <span className="mx-[5px]">-</span>
                        <span>200$</span>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center my-[8px]">
                      <div className="w-[16px] flex items-center justify-center h-[16px]  rounded-[50%] border border-black mr-[10px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-[10px] "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </div>
                      <div className="text-[14px]">
                        <span>150$</span>
                        <span className="mx-[5px]">-</span>
                        <span>300$</span>
                      </div>
                    </div>
                    <div className="flex  cursor-pointer items-center my-[8px]">
                      <div className="w-[16px] flex items-center justify-center h-[16px]  rounded-[50%] border border-black mr-[10px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-[10px] "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </div>
                      <div className="text-[14px]">
                        <span>200$</span>
                        <span className="mx-[5px]">-</span>
                        <span>400$</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="py-[15px]">Price range:</p>
                    <div className=" flex items-center text-[15px]">
                      <div className="flex border-b border-black">
                        <span>$</span>
                        <input
                          type="number"
                          className="w-[35px] inp-price outline-none"
                        />
                      </div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="mx-[15px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <div className="flex border-b border-black">
                        <span>$</span>
                        <input
                          type="number"
                          className="inp-price inp-price w-[35px] outline-none"
                        />
                      </div>
                      <span className="border-b border-black ml-[25px] cursor-pointer">
                        Apply
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-[80%]">
          <div className="flex flex-wrap justify-center items-center gap-[16px]">
            {displayedProducts &&
              displayedProducts.map((item, i) => {
                return (
                  <a key={i} href="" className="w-[215px]">
                    <img src="/assets/img/women.webp" alt="" />
                    <div className="flex justify-between items-center mx-[5px] py-[7px]">
                      <p className="text-[15px] tracking-[.5px]">
                        Eco white surrplcie knit top
                      </p>
                      <CiHeart className="w-[19px] h-[19px]" />
                    </div>
                    <span className="text-[15px] mx-[5px] tracking-[.5px]">
                      $96.95
                    </span>
                    <span className="line-through line-[#333] text-[#5c5b5b] text-[14px]">
                      99.95$
                    </span>
                    <span className="text-[14px] text-[#5c5b5b]">(3% OFF)</span>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
