import React, { FC, memo, useRef, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { auth, firestore } from "../../firebase";

interface Props {}

const SignUp: FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signUp = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    let promise = new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref?.user?.updateProfile({
            displayName: firstName + " " + lastName,
          });
          firestore.collection("usersCollection").add({
            uid: ref.user!.uid,
            displayName: ref.user?.displayName,
          });
          resolve(ref);
        })
        .catch((error) => reject(error));
    });
    return promise;
  };
  const history = useHistory();
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef!.current!.value;
    const password = passwordRef!.current!.value;
    const firstName = firstNameRef!.current!.value;
    const lastName = lastNameRef!.current!.value;
    signUp(email, password, firstName, lastName)
      .then((ref) => {
        setLoading(false);
        history.push("/home");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <form className="flex flex-col w-80" onSubmit={(e) => handleSignUp(e)}>
        <label htmlFor="first-name">First Name</label>
        <input
          ref={firstNameRef}
          className="mb-5 border border-black"
          type="text"
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          ref={lastNameRef}
          className="mb-5 border border-black"
          type="text"
        />
        <div className="relative flex flex-col">
          <label htmlFor="password">Email</label>
          <input
            ref={emailRef}
            className="mb-5 border border-black"
            type="text"
          />
          {error && (
            <div className="absolute top-12 text-secondary-400">
              {error.slice(10)}
            </div>
          )}
        </div>
        <div className="relative flex flex-col mt-10">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            className="mb-5 border border-black"
            type="password"
          />
          {error && (
            <div className="absolute top-12 text-secondary-400">
              {error.slice(10)}
            </div>
          )}
        </div>
        <Button className="mt-10 w-28">Register</Button>
      </form>
    </div>
  );
};

SignUp.defaultProps = {};

export default memo(SignUp);
