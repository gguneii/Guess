import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io"
import { BiBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
        <nav> 
            <a className="logo">
              <img src="/assets/img/guesss.svg" alt="logo" />
            </a>
           <ul>
           <li>
           <IoIosSearch />
           </li>
           <li>
            <IoMdHeartEmpty />
           </li>
           <li>
            <BiBasket />
           </li>
           <li>
           <GiHamburgerMenu />
           </li>
           </ul>
        </nav>
    </div>
  )
}

export default Header