import React, { FC, memo, useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import LoginForm from "../../components/LoginForm";

interface Props { }

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
