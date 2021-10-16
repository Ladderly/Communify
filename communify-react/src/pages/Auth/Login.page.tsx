import React, { FC, memo, useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
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
    <div>
      <form onSubmit={(e) => handleSignIn(e)} className="flex flex-col w-80">
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          className="mb-5 border border-black"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          className="mb-5 border border-black"
          type="password"
        />
        <Button className="w-28">Sign In</Button>
      </form>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
