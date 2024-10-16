import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [hideMenu, setHideMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "text-slate-800 backdrop-blur-xl transition-colors duration-500 ease-in-out shadow-sm"
          : "text-slate-300"
      } ${
        hideMenu
          ? ""
          : "backdrop-blur-xl transition-colors duration-500 ease-in-out"
      } z-50 fixed w-full p-6`}
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12 md:flex-row md:items-center justify-between">
        <div className="flex flex-row justify-between items-center">
          <h1 className="serif text-2xl">
            <a href="/">Arctic Travels</a>
          </h1>
          <button
            className="md:hidden rounded-full"
            aria-label={hideMenu ? "Open menu" : "Close menu"}
            aria-expanded={!hideMenu}
            onClick={() => setHideMenu((prevState) => !prevState)}
          >
            {hideMenu ? (
              <Bars3Icon className="size-6" />
            ) : (
              <XMarkIcon className="size-6" />
            )}
          </button>
        </div>

        <nav className={`${hideMenu ? "hidden md:flex" : "self-end"}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-lg">
            <li>
              <a href="#regions">Regions</a>
            </li>
            <li>
              <a href="#lodging">Lodging</a>
            </li>
            <li>
              <a href="#resorts">Resorts</a>
            </li>
            <li>
              <a href="#passes">Passes</a>
            </li>
          </ul>
        </nav>

        <div
          className={`${
            hideMenu ? "hidden md:flex" : "self-end flex"
          } flex-row gap-4 md:gap-6 text-slate-900`}
        >
          <button className="bg-slate-200 hover:bg-slate-400 shadow-md rounded-full px-3 py-1 uppercase font-bold">
            Log In
          </button>
          <button className="bg-slate-200 hover:bg-slate-400 shadow-md rounded-full px-3 py-1 uppercase font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
