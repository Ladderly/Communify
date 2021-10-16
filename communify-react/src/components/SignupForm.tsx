import React, { FC, memo, useState } from "react";
import Button from './Button'

interface Props {
}
const SignupForm: FC<Props> = (props) => {
     const [values, setValues] = useState({
          name: '',
          email: '',
          password:'',
     });

     return (
          <>
               <form action="" className=" flex flex-col  space-y-3">
                    <div className="sm:text-center text-xl sm:text-3xl">SignUp</div>
                    <div className="flex flex-col space-y-1">
                         <label htmlFor="email" className="text-lg">FirstName</label>
                         <input className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent" type="text" name="email" autoComplete="off" />
                    </div>
                    <div className="flex flex-col space-y-1">
                         <label htmlFor="email" className="text-lg">LastName</label>
                         <input className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent" type="text" name="email" autoComplete="off" />
                    </div>

                    <div className="flex flex-col space-y-1">
                         <label htmlFor="email" className="text-lg">Email</label>
                         <input className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent" type="text" name="email" autoComplete="off" />
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                         <label htmlFor="email" className="text-lg">Password</label>
                         <input className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent" type="password" name="password" />
                    </div>

                    <Button className="w-20">Signup</Button>
                    <div className="flex h-5 space-x-2 sm:hidden ">
                         <h1>continue</h1>
                         <h1>continue</h1>
                    </div>
               </form>
          </>
     )
}

SignupForm.defaultProps = {};
export default memo(SignupForm);