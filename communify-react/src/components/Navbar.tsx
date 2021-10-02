import { FiSearch } from "react-icons/fi";
import { SiQuora } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
interface Props {}

const navbar: FC<Props> = (props) => {
  return (
    <nav className="flex h-16 lg:space-x-12 md:space-x-10 md:mx-16 mx-6 sm:mx-4 sm:space-x-0 items-center justify-between">
      <div className="flex">
        <SiQuora className="w-12 h-10" />
      </div>

      <div className="sm:flex justify-between hidden w-full items-center">
        <div className="flex lg:space-x-10 md:space-x-7 sm:space-x-4 ml-10">
          <a href="#" className="w-7 h-7 bg-gray">
            <MdHome className="w-7 h-7" />
          </a>
          <a href="#" className="w-7 h-7">
            <BiBookAdd className="w-7 h-7" />
          </a>
        </div>

        <div className="flex p-3 hover:border-2 border-solid border-2 rounded-full lg:w-2/4 md:w-1/3 sm:w-1/3 justify-between mx-4">
          <input
            type="text"
            className="w-2/4 focus:outline-none"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <FiSearch className="w-5 h-5 ml-2"></FiSearch>
          </button>
        </div>

        <div className="flex  lg:space-x-6 md:space-x-4 sm:space-x-4">
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

navbar.defaultProps = {};

export default memo(navbar);
