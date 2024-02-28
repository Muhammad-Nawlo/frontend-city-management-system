import LanguageSelector from "@/components/language/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import AuthButton from "@/layouts/root/Navbar/AuthButton";
import { ReactNode, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="py-2 shadow-md flex items-center bg-[var(--nav-bg-clr)] text-[var(--nav-text-clr)] bg-opacity-45">
      <nav className="container flex gap-8 flex-wrap items-center">
        <Link to="/" className="w-32">
          <img src={logo} alt="site icon" />
        </Link>
        <SearchForm />
        <NavLinks />
        <LanguageSelector />
        <AuthButton />
      </nav>
    </header>
  );
};

export default Navbar;

function SearchForm() {
  return (
    <form className="min-w-6 rounded-full flex-1 border-quaternary border-2 overflow-hidden">
      <input
        className="focus:placeholder:opacity-0 placeholder:duration-200 placeholder:text-quaternary py-2 px-4 h-full w-full bg-transparent outline-none"
        type="search"
        placeholder="search..."
      />
    </form>
  );
}

function NavLinks() {
  const linkClasses =
    "text-[var(--nav-link-text-clr)] hover:text-[var(--nav-link-text-hover-clr)] bg-[var(--nav-link-bg-clr)] hover:bg-[var(--nav-link-bg-hover-clr)] duration-300 rounded-full px-2 py-1";
  return (
    <ul className="flex gap-1 md:gap-6 justify-between items-center mx-auto md:mx-10">
      <li>
        <Link className={linkClasses} to="/hotels">
          Hotels
        </Link>
      </li>
      <li>
        <Link className={linkClasses} to="/restaurants">
          Restaurants
        </Link>
      </li>
      <li>
        <Link className={linkClasses} to="/parking">
          Parking
        </Link>
      </li>
      <li>
        <Link className={linkClasses} to="/more">
          More
        </Link>
      </li>
    </ul>
  );
}
