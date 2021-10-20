import React, { FC, memo, useRef, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { auth } from "../../firebase";

interface Props {}

const Login: FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const signIn = (email: string, password: string) => {
    let promise = new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => resolve(ref))
        .catch((error) => reject(error));
    });
    return promise;
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    signIn(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/home");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
        setLoading(false);
      });
  };
  const passwordReset = (email: string) => {
    let promise = new Promise((reject, resolve) => {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen bg-no-repeat bg-login bg-fill">
      <div className="flex bg-white flex-col sm:justify-center sm:w-4/6 w-3/5 h-5/6 mx-auto space-y-2 p-1.5">
        <div className="flex justify-center h-3/6">
          <h1 className="text-3xl text-center sm:text-5xl">QUORA</h1>
        </div>

        <div className="flex h-80 justify-center p-1 space-x-0.5">
          {/* continue with*/}
          <div className="invisible p-1 sm:visible sm:w-4/5"></div>
          {/* border */}{" "}
          <div className="invisible sm:border-2 sm:visible"></div>
          <div className="w-4/5 p-1 sm:w-4/5">
            <form
              onSubmit={(e) => handleSignIn(e)}
              action=""
              className="flex flex-col space-y-4 "
            >
              <div className="text-xl sm:text-center sm:text-3xl">Login</div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
                  type="text"
                  name="email"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label htmlFor="email" className="text-lg">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
                  type="password"
                  name="password"
                />
              </div>

              <Button className="w-20">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
