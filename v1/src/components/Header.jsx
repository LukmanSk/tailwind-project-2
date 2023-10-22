import logoIcon from "../assets/default-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="logo w-[4rem] ">
          <img src={logoIcon} alt="" className="logo_icon" />
        </div>
        <div className="hamburger">
          <AiOutlineMenu className="text-[28px]" />
        </div>
        <div className="menu hidden">
          <ul className="menu__list">
            <li className="list-item">
              <a href="#" className="link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
