import React, { FC, memo, useRef, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { auth, firestore } from "../../firebase";
import SignupForm from "../../components/SignupForm";

interface Props { }

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
