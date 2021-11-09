import { FiSearch } from "react-icons/fi";
import { SiQuora } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { FC, Fragment, memo, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import { auth } from "../firebase";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Avatar from "./Avatar";
import { AiFillHome } from "react-icons/ai";
import { RiFileListFill } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
interface Props {}

const Navbar: FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const user = useContext(AuthContext);
  const signOut = () => {
    return auth.signOut();
  };
  const handleSignOut = () => {
    signOut();
    sessionStorage.clear();
    setLoading(false);
    window.location.reload();
  };
  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white border-b-2 border-gray-200 shadow-sm lg:space-x-12 md:space-x-10 md:px-16 sm:px-4 sm:space-x-0">
        <div className="flex">
          <SiQuora className="w-12 h-10" />
        </div>

        <div className="items-center justify-between hidden w-full sm:flex">
          <div className="flex ml-10 lg:space-x-10 md:space-x-7 sm:space-x-4">
            <button className="w-7 h-7 bg-gray">
              <MdHome
                onClick={() => history.push("/home")}
                className="w-7 h-7"
              />
            </button>
            <button className="w-7 h-7">
              <BiBookAdd
                onClick={() => {
                  user ? history.push("/questionlist") : history.push("/login");
                }}
                className="w-7 h-7"
              />
            </button>
          </div>

          <div className="relative lg:w-2/4 md:w-1/3 sm:w-1/3">
            <FiSearch className="absolute right-0 w-5 h-5 mr-2 top-3 text-secondary-400"></FiSearch>
            <input
              type="text"
              className="justify-between w-full p-3 mx-4 border-2 border-transparent border-solid rounded-full focus:outline-none focus:border-secondary-300"
              placeholder="What are you looking for?"
            />
          </div>

          {!user && !loading ? (
            <div className="flex lg:space-x-6 md:space-x-4 sm:space-x-4">
              <Button onClick={() => history.push("/login")} theme="outline">
                Sign in
              </Button>
              <Button onClick={() => history.push("/signup")}>Sign up</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 lg:space-x-10 sm:justify-between">
              <button onClick={() => history.push(`/profile/${user!.uid}`)}>
                <Avatar
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  size="small"
                  alt="profile-pic"
                />
              </button>
              <Button
                loading={loading}
                className="w-28"
                onClick={() => {
                  setLoading(true);
                  handleSignOut();
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            {!isMenuOpen && <HiOutlineMenu className="w-10 h-10" />}
            {isMenuOpen && <GrClose className="w-10 h-10" />}
          </button>
        </div>
      </nav>
      <Transition.Root show={isMenuOpen} as={Fragment}>
        <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
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
            <div className="fixed bottom-0 right-0 flex flex-col w-48 h-full pt-4 pl-6 space-y-6 transform border-2 bg-gray-50 sm:hidden top-16">
              <div className="flex space-x-2">
                <AiFillHome className="w-6 h-6 text-secondary-400" />
                <button
                  onClick={() => {
                    history.push("/home");
                    setIsMenuOpen(false);
                  }}
                  className="font-bold text-center w-7 text-secondary-400"
                >
                  Home
                </button>
              </div>
              {user && (
                <div className="flex space-x-2">
                  <CgProfile className="w-6 h-6 text-secondary-400" />
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      history.push(`/profile/${user!.uid}`);
                    }}
                    className="font-bold text-center w-7 text-secondary-400"
                  >
                    Profile
                  </button>
                </div>
              )}
              <div className="flex space-x-2">
                <RiFileListFill className="w-6 h-6 text-secondary-400" />
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    user
                      ? history.push("/questionlist")
                      : (window.location.href = "/login");
                  }}
                  className="font-bold text-center w-7 text-secondary-400"
                >
                  QuestionList
                </button>
              </div>
              {!user && (
                <>
                  <div className="flex space-x-2">
                    <BiLogIn className="w-6 h-6 text-secondary-400" />
                    <button
                      onClick={() => history.push("/login")}
                      className="font-bold text-center w-7 text-secondary-400"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <BiLogIn className="w-6 h-6 text-secondary-400" />
                    <button
                      onClick={() => history.push("/signup")}
                      className="font-bold text-center w-7 text-secondary-400"
                    >
                      SignUp
                    </button>
                  </div>
                </>
              )}
              {user && (
                <div className="flex space-x-2">
                  <GoSignOut className="w-6 h-6 text-secondary-400" />
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSignOut();
                    }}
                    className="font-bold text-center w-7 text-secondary-400"
                  >
                    SignOut
                  </button>
                </div>
              )}
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
