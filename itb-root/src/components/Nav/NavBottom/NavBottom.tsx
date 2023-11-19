import Menu from "./Menu";

const NavBottom = () => {
  return (
    <div
      id="NavBottom"
      className="w-screen bg-blue-600 px-24 flex justify-between items-center"
    >
      <img src="/src/assets/img/logo-itb-1920.png" alt="" className="h-16" />
      <Menu />
    </div>
  );
};

export default NavBottom;
