import { chercherImg, sacImg, appleImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex <-full screen-max-width">
        <img src={appleImg} alt="Apple" className="h-[18px] w-[14px]" />

        <div>
          {["Phones", "Macbooks", "Tablets"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>

        <div>
          <img src={chercherImg} alt="chercher" width={18} height={18} />
          <img src={sacImg} alt="sac" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
