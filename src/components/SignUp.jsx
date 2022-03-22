import React, { useState, useEffect } from "react";
import { validate } from "./validate";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [touched, setTouch] = useState({});

  const focusHandler = (event) => {
    setTouch({ ...touched, [event.target.name]: true });
  };

  const [error, setError] = useState({});
  useEffect(() => {
    setError(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(error).length) {
      (function () {
        toast.error("Plase check forms", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })();

      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    } else {
      (function () {
        toast.success("Account created 😘", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })();
    }
  };
  return (
    <div>
      <form className="formContainer" onSubmit={submitHandler}>
        <h2>SignUp</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            autoComplete="off"
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={`${
              error.name && touched.name ? "inputError" : "inputSuccess"
            }`}
          />
          {error.name && touched.name && (
            <p className="inputMessage">{error.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            autoComplete="off"
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.email && touched.email && (
            <p className="inputMessage">{error.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            autoComplete="off"
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.password && touched.password && (
            <p className="inputMessage">{error.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            autoComplete="off"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.confirmPassword && touched.confirmPassword && (
            <p className="inputMessage">{error.confirmPassword}</p>
          )}
        </div>

        <div>
          <label htmlFor="isAccepted" style={{display: "inline"}}>i igure</label>
          <input
            id="isAccepted"
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.isAccepted && touched.isAccepted && (
            <p className="inputMessage">{error.isAccepted}</p>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
