import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl lg:max=w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Test</span>
            <span className="text-slate-900">Frontend</span>
          </h1>
        </Link>

        <form className="p-3 bg-slate-100 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />

          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Contact
            </li>
          </Link>

          <Link to={"/news"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              News Article
            </li>
          </Link>
        </ul>

        <Link to={"/sign-in"}>
          <Button size="lg" rounded="5">Sign In</Button>
        </Link>
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <img
                        src="frontend\src\assets\00483897.webp"
                        alt="user photo"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60">
                <DropdownMenuLabel>My Acount</DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-400" />

                <DropdownMenuItem className="block font-semibold text-sm">
                    <div className="flex flex-col gap-1">
                        <span>Username</span>
                        <span>Email</span>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="font-semibold mt-2">
                    <Link to="/dasboard">Profile</Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="font-semibold mt-2">
                    Sign Out
                </DropdownMenuItem>
                 
            </DropdownMenuContent>


        </DropdownMenu> */}
      </div>
    </header>
  );
};

export default Header;
