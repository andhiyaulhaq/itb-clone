import {
  faEnvelope,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const menuList = [
    { id: 1, name: "Staf" },
    { id: 2, name: "Mahasiswa" },
    { id: 3, name: "Alumni" },
    { id: 4, name: "Mitra" },
    { id: 5, name: "Pengunjung" },
    { id: 6, name: "Pers" },
    { id: 7, name: "My ITB" }
  ];

  return (
    <>
      {menuList.map((menu) => (
        <li key={menu.id}>{menu.name}</li>
      ))}
      <span>COVID19</span>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Kontak</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span>Cari</span>
      </div>
    </>
  );
};

export default Menu;
