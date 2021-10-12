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
      <nav className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white lg:space-x-12 md:space-x-10 md:mx-16 sm:mx-4 sm:space-x-0">
        <div className="flex">
          <SiQuora className="w-12 h-10" />
        </div>

        <div className="items-center justify-between hidden w-full sm:flex">
          <div className="flex ml-10 lg:space-x-10 md:space-x-7 sm:space-x-4">
            <button className="w-7 h-7 bg-gray">
              <MdHome className="w-7 h-7" />
            </button>
            <button className="w-7 h-7">
              <BiBookAdd className="w-7 h-7" />
            </button>
          </div>

             <div className="relative lg:w-2/4 md:w-1/3 sm:w-1/3">
             <FiSearch className="absolute right-0 w-5 h-5 mr-2 top-3 text-secondary-400"></FiSearch>
             <input
              type="text"
              className="justify-between w-full p-3 mx-4 border border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
              placeholder="What are you looking for?"
            />
             </div>
    
        

          <div className="flex lg:space-x-6 md:space-x-4 sm:space-x-4">
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
            <Dialog.Overlay className="fixed inset-0 bg-black top-16 sm:hidden" />
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
            <div className="fixed bottom-0 right-0 flex flex-col w-40 h-full pl-2 space-y-4 transform bg-gray-200 border-2 sm:hidden top-16">
              <button className="font-bold text-center w-7">
                Home
              </button>
              <button className="font-bold text-center w-7">
                Topics
              </button>
              <button className="font-bold text-center w-7">
                Login
              </button>
              <button className="font-bold text-center w-7">
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
