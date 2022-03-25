import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";

export default function Chat() {
  const [loading, , setLoading] = useState(true);
  const user = useContext(AuthContext);

  const history = useHistory();

  const logOutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "04e774f2-2f9b-481b-a4e5-52bac596bbd1",
          "user-name": user.email,
          "user-secret": user.id,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "ea1db635-4552-42cc-92d8-1e48baf7234c",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  if (!user || loading) return "Loading...";

  return (
    <div>
      <Navbar logOutHandler={logOutHandler} />
      <ChatEngine
        height="calc(100vh - 100px)"
        projectID="04e774f2-2f9b-481b-a4e5-52bac596bbd1"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
