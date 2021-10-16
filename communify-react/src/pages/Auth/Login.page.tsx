import React, { FC, memo } from "react";
import LoginForm from "../../components/LoginForm";

interface Props { }

const Login: FC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center bg-login bg-no-repeat  bg-fill">
      <div className="flex bg-white flex-col sm:justify-center sm:w-4/6 w-3/5 h-5/6 mx-auto space-y-2 p-1.5">

        <div className="flex h-3/6 justify-center">
          <h1 className="sm:text-5xl text-3xl text-center">QUORA</h1>
        </div>

        <div className="flex h-80 justify-center p-1 space-x-0.5">
          {/* continue with*/}
          <div className=" invisible sm:visible p-1 sm:w-4/5"></div>

          {/* border */} <div className="sm:border-2 invisible sm:visible"></div>
          
          <div className="sm:w-4/5 w-4/5 p-1">
            <LoginForm />
          </div>

        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
