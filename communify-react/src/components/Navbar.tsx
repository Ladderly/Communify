import { FiSearch } from "react-icons/fi";
import { SiQuora } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { FC, memo } from "react";
import Button from "./Button";
interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between h-16 mx-6 bg-white lg:space-x-12 md:space-x-10 md:mx-16 sm:mx-4 sm:space-x-0">
      <div className="flex">
        <SiQuora className="w-12 h-10" />
      </div>

      <div className="items-center justify-between hidden w-full sm:flex">
        <div className="flex ml-10 lg:space-x-10 md:space-x-7 sm:space-x-4">
          <a href="#" className="w-7 h-7 bg-gray">
            <MdHome className="w-7 h-7" />
          </a>
          <a href="#" className="w-7 h-7">
            <BiBookAdd className="w-7 h-7" />
          </a>
        </div>

        <div className="flex justify-between p-3 mx-4 border-2 border-solid rounded-full hover:border-2 lg:w-2/4 md:w-1/3 sm:w-1/3">
          <input
            type="text"
            className="w-2/4 focus:outline-none"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <FiSearch className="w-5 h-5 ml-2"></FiSearch>
          </button>
        </div>

        <div className="flex lg:space-x-6 md:space-x-4 sm:space-x-4">
          <Button theme="outline">Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </div>

      <div className="sm:hidden">
        <HiOutlineMenu className="w-10 h-10" />
      </div>
    </nav>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
