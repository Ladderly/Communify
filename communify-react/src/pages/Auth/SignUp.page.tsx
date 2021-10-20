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
          ref.user
            ?.updateProfile({
              displayName: firstName + " " + lastName,
            })
            .then(() => {
              firestore.collection("users").doc().set({
                uid: ref.user?.uid,
                displayName: ref.user?.displayName,
                email: ref.user?.email,
              });
            });
          resolve(ref);
        })
        .catch((error) => {
          console.log(error.message);
          reject(error);
        });
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
    <div className="flex flex-col justify-center w-full min-h-screen bg-no-repeat bg-login bg-fill">
      <div className="flex bg-white flex-col sm:justify-center sm:w-4/6 w-3/5 mx-auto p-1.5 overflow-scroll">
        <h1 className="text-3xl text-center sm:text-5xl">QUORA</h1>

        <div className="flex sm:h-80 justify-center p-1 space-x-0.5">
          {/* continue with*/}
          <div className="flex-1 invisible p-1 sm:visible"></div>
          {/* border */}{" "}
          <div className="invisible sm:border-2 sm:visible"></div>
          <div className="flex-1 p-1">
            <form
              onSubmit={(e) => handleSignUp(e)}
              action=""
              className="flex flex-col space-y-3 "
            >
              <div className="text-xl sm:text-center sm:text-3xl">SignUp</div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-lg">
                  FirstName
                </label>
                <input
                  ref={firstNameRef}
                  className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
                  type="text"
                  name="firstName"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-lg">
                  LastName
                </label>
                <input
                  ref={lastNameRef}
                  className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
                  type="text"
                  name="lastName"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col space-y-1">
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

              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="border-2 border-transparent border-solid rounded-full focus:outline-none hover:border-2 focus:ring-2 focus:ring-secondary-200 focus:border-transparent"
                  type="password"
                  name="password"
                />
              </div>

              <Button className="w-20">Signup</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.defaultProps = {};

export default memo(SignUp);
