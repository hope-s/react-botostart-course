import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
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
    setData({ ...data, [event.target.name]: event.target.value });
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
        email: true,
        password: true,
      });
    } else {
      (function () {
        toast.success("Youre Logined ✅", {
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
        <h2>SignIn</h2>
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

        <button>Submit</button>

        <div className="Login_SignUp">
          <Link to="/signUp">SignUp</Link>
        </div>
      </form>
    </div>
  );
}
