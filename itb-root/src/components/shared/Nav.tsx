import {
  faEnvelope,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { navBottomMenuList, navTopMenuList } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full">
      <div
        id="NavTop"
        className="flex justify-between items-center w-full bg-sky-950 h-11 px-24"
      >
        <div id="language" className="flex gap-4 px-1.5">
          <a href="">
            <img src="/src/assets/img/nav/indonesia.png" alt="" />
          </a>
          <a href="">
            <img src="/src/assets/img/nav/uk.png" alt="" />
          </a>
        </div>
        <ul className="flex items-center text-gray-200 gap-4">
          {navTopMenuList.map((menu, index) => (
            <li key={index}>
              <a href={menu.url}>{menu.text}</a>
            </li>
          ))}
          <li>
            <a href="">
              <div className="px-2 py-1 bg-red-700 rounded-md">COVID19</div>
            </a>
            {/* <span>COVID19</span> */}
          </li>
          <li className="flex gap-3 items-center">
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} className="pt-0.5" />
            </a>
            <a href="">
              <span>Kontak</span>
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <a href="">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="pt-0.5" />
            </a>
            <a href="">
              <span>Cari</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        id="NavBottom"
        className="w-full bg-blue-800 px-24 flex justify-between items-center"
      >
        <a href="">
          <img
            src="/src/assets/img/nav/logo-itb-1920.png"
            alt=""
            className="h-16"
          />
        </a>
        <div className="flex gap-8">
          <ul className="flex gap-6 text-gray-100">
            {navBottomMenuList.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>{menu.text}</a>
              </li>
            ))}
          </ul>
          <a href="">
            <div
              id="menu-btn"
              className="border-2 border-gray-200 rounded-sm h-6 w-10 flex flex-col justify-center items-center gap-0.5"
            >
              <span className="h-0.5 w-4 bg-gray-200"></span>
              <span className="h-0.5 w-4 bg-gray-200"></span>
              <span className="h-0.5 w-4 bg-gray-200"></span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
