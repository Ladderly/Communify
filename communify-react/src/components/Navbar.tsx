import React, { FC, memo } from "react";
import Button from "./Button";
import { AiFillHome } from "react-icons/ai";
import {FiSearch} from "react-icons/fi"
import {SiQuora} from "react-icons/si"
import {MdHome} from "react-icons/md"
import {BiBookAdd} from "react-icons/bi"

interface Props { }

const navbar: FC<Props> = (props) => {
    return (
            <nav className="flex px-8 items-center justify-between w-screen h-16 text-center ml-10 mr-10">
                <div className="flex items-center justify-evenly h-16 w-full">
                    <div className="flex object-fill ">
                        <SiQuora className = "w-10 h-8" />
                    </div>
                    <div className="flex justify-evenly space-x-10">

                    <div className="flex space-x-8">

                        <li className="list-none  text-xl hover:underline">
                            <a href="#"><MdHome className="w-7 h-7 bg-gray"/></a>
                        </li>

                        <li className="list-none hover:underline  text-xl">
                            <a href="#"><BiBookAdd className="w-7 h-7"/></a>
                        </li>
                    </div>

                    <div className="flex p-3 hover:border-2 border-solid border-secondary-100 border-2 rounded 
                    ">
                        <input type="text" className="w-60" placeholder="What are you looking for?"/>
                        <button type ="submit" className ="searchButton">
                        <FiSearch className ="w-5 h-5 ml-2"></FiSearch>
                        </button>
                    </div>
                    <div className="md:flex lg:space-x-10 hidden md:space-x-6">
                        <Button theme="outline">Sign in</Button>
                        <Button>Sign up</Button>
                    </div>
                    </div>
                </div>

                {/* <div className="md:hidden">
          <button>
            <HiOutlineMenu className="w-10 h-10" />
          </button>
        </div> */}
            </nav>
    );
};

navbar.defaultProps = {};

export default memo(navbar);
