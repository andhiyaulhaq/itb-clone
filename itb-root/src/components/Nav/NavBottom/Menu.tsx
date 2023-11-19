const Menu = () => {
  const menuList = [
    "Tentang ITB",
    "Penerimaan",
    "Pendidikan",
    "Penelitian",
    "Pengabdian",
    "Penghargaan",
    "Multikampus"
  ];

  return (
    <div className="flex gap-8">
      <ul className="flex gap-6 text-gray-100">
        {menuList.map((menu, index) => (
          <li key={index}>{menu}</li>
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
  );
};

export default Menu;
