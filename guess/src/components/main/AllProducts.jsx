import { useParams } from "react-router";

function AllProducts() {
    const {catId} = useParams() 
    const {product}= useContext(DATA);

    function allProduct(){
        if(catId){
            return product.filter((item) => item.id == catId)
        }
    }

  return (
    <>
      <div>
        <div class="w-[80%] max-1024:w-full pt-[70px] pb-[40px] flex justify-between  pl-[40px] pr-[16px] max-1024:pl-0 ">
          <span>(28 styles)</span>
          <div class="flex gap-[15px]">
            <div class="flex items-center relative max-1024:hidden">
              <div class="flex items-center cursor-pointer">
                <span class="underline">Viwe 10</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-[17px] ml-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </div>
              <div class="bg-white border  absolute top-[33px] left-0 w-[100px] z-10 hidden">
                <p class="py-[5px]  px-[20px] hover:bg-gray-100 cursor-pointer">
                  Viwe 5
                </p>
                <p class="py-[5px] px-[20px] hover:bg-gray-100 cursor-pointer">
                  Viwe 10
                </p>
                <p class="py-[5px] px-[20px] hover:bg-gray-100 cursor-pointer">
                  Viwe 15
                </p>
              </div>
            </div>
            <div class="flex items-center max-1024:hidden ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
              <select class=" outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span>of 3</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
          <div class="flex items-center relative gap-[15px] ">
            <div class="max-1024:hidden">
              <span>View</span>
              <span class="  cursor-pointer px-[5px]">2</span>
              <span
                class="  cursor-pointer px-[5px] border-l border-r"
                style="font-weight: 700;"
              >
                4
              </span>
              <span class="  cursor-pointer px-[5px]">6</span>
            </div>
            <div class="">
              <p class=" cursor-pointer flex items-center underline max-1024:hidden ">
                Featured{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="ml-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </p>
              <div class="bg-white border  z-40 absolute top-[23px] w-full left-0   hidden">
                <p class="py-[5px] px-[10px]  hover:bg-gray-100  cursor-pointer">
                  Price: low to high
                </p>
                <p class="py-[5px] px-[10px]  hover:bg-gray-100  cursor-pointer">
                  Price: high to low
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
           
        </div>
      </div>
    </>
  );
}

export default AllProducts;
