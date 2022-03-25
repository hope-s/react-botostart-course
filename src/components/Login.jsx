import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

export default function Login() {
  return (
    <div>
      <button
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        login
      </button>
    </div>
  );
}
