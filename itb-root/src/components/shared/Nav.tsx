import {
  faEnvelope,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { navBottomMenuList, navTopMenuList } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div
        id="NavTop"
        className="flex justify-between items-center w-full bg-blue-950 h-11 px-24"
      >
        <div id="language" className="flex gap-4 px-1.5">
          <span>
            <img src="/src/assets/img/nav/indonesia.png" alt="" />
          </span>
          <span>
            <img src="/src/assets/img/nav/uk.png" alt="" />
          </span>
        </div>
        <ul className="flex items-center text-gray-200 gap-4">
          {navTopMenuList.map((menu, index) => (
            <li key={index}>
              <a href={menu.url}>{menu.text}</a>
            </li>
          ))}
          <li>
            <div className="px-2 py-1 bg-red-700 rounded-md">COVID19</div>
            {/* <span>COVID19</span> */}
          </li>
          <li className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="pt-0.5" />
            <span>Kontak</span>
          </li>
          <li className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pt-0.5" />
            <span>Cari</span>
          </li>
        </ul>
      </div>

      <div
        id="NavBottom"
        className="w-full bg-blue-600 px-24 flex justify-between items-center"
      >
        <img
          src="/src/assets/img/nav/logo-itb-1920.png"
          alt=""
          className="h-16"
        />
        <div className="flex gap-8">
          <ul className="flex gap-6 text-gray-100">
            {navBottomMenuList.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>{menu.text}</a>
              </li>
            ))}
          </ul>
          <div
            id="menu-btn"
            className="border-2 border-gray-200 rounded-sm h-6 w-10 flex flex-col justify-center items-center gap-0.5"
          >
            <span className="h-0.5 w-4 bg-gray-200"></span>
            <span className="h-0.5 w-4 bg-gray-200"></span>
            <span className="h-0.5 w-4 bg-gray-200"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
