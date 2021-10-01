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
            <nav className="flex h-16 space-x-12 mx-16 items-center">
                    <div className="flex">
                        <SiQuora className = "w-12 h-10" />
                    </div>

                    <div className="flex justify-between w-full items-center">
                        <div className="flex space-x-10 ml-10">
                            <a href="#" className="w-7 h-7 bg-gray"><MdHome className="w-7 h-7"/></a>
                            <a href="#" className="w-7 h-7"><BiBookAdd className="w-7 h-7"/></a>
                        </div>
                    <div className="flex p-3 hover:border-2 border-solid border-2 rounded w-2/4 justify-between
                    ">
                        <input type="text" className="w-2/4 focus:outline-none" placeholder="What are you looking for?"/>
                        <button type ="submit" className ="searchButton">
                        <FiSearch className ="w-5 h-5 ml-2"></FiSearch>
                        </button>
                    </div>
                    
                    <div className="space-x-6">
                        <Button theme="outline">Sign in</Button>
                        <Button>Sign up</Button>
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
