import Language from "./Language";
import Menu from "./Menu";

const NavTop = () => {
  return (
    <div
      id="NavTop"
      className="flex justify-between items-center w-screen bg-blue-950 h-11 px-24"
    >
      <Language />
      <Menu />
    </div>
  );
};

export default NavTop;
