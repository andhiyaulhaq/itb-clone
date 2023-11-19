import {
  faEnvelope,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const menuList = [
    "Staf",
    "Mahasiswa",
    "Alumni",
    "Mitra",
    "Pengunjung",
    "Pers",
    "My ITB"
  ];

  return (
    <ul className="flex items-center text-gray-200 gap-4">
      {menuList.map((menu, index) => (
        <li key={index}>{menu}</li>
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
  );
};

export default Menu;
