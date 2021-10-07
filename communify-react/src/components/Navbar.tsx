import { FiSearch } from "react-icons/fi";
import { SiQuora } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { FC, Fragment, memo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
interface Props { }

const Navbar: FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex  h-16 lg:space-x-12 md:space-x-10 md:mx-16 px-6 sm:mx-4 sm:space-x-0 items-center justify-between">
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
          <button onClick={() => setIsMenuOpen(true)}>
            {!isMenuOpen && <HiOutlineMenu className="w-10 h-10" />}
            {isMenuOpen && < GrClose className="w-10 h-10" />}
          </button>
        </div>
      </nav>
      <Transition.Root show={isMenuOpen} as={Fragment}>
        <Dialog
          open={isMenuOpen}
          onClose={setIsMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="top-16 fixed inset-0 bg-black sm:hidden" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="sm:hidden top-16 transform flex h-full border-2 bg-gray-200 fixed bottom-0 right-0 w-40 pl-2  flex-col space-y-4">
              <button className="w-7 text-center font-bold">
                Home
              </button>
              <button className="w-7 text-center font-bold">
                Topics
              </button>
              <button className="w-7 text-center font-bold">
                Login
              </button>
              <button className="w-7 text-center font-bold">
                SignUp
              </button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );

};

Navbar.defaultProps = {};

export default memo(Navbar);
