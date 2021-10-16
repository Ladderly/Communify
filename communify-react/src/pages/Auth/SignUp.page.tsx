import React, { FC, memo } from "react";
import SignupForm from "../../components/SignupForm";

interface Props { }

const Signup: FC<Props> = (props) => {
  return (
    <div className="w-full min-h-screen bg-login bg-no-repeat flex flex-col justify-center bg-fill">
      <div className="flex bg-white flex-col sm:justify-center sm:w-4/6 w-3/5 mx-auto p-1.5 overflow-scroll">
        <h1 className="sm:text-5xl text-3xl text-center">QUORA</h1>

        <div className="flex sm:h-80 justify-center p-1 space-x-0.5">
          {/* continue with*/}
          <div className=" invisible sm:visible p-1 flex-1"></div>

          {/* border */} <div className="sm:border-2 invisible sm:visible"></div>

          <div className="flex-1 p-1">
            <SignupForm />
          </div>

        </div>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
