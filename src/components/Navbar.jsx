import { chercherImg, sacImg, appleImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" className="h-[18px] w-[14px]" />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:felx-1">
          <img src={chercherImg} alt="chercher" width={18} height={18} />
          <img src={sacImg} alt="sac" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
