import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Notifications from "./Pages//Notifications/Notifications";
import Messages from "./Pages/Messages/Messages";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Lists from "./Pages/Lists/Lists";
import Profile from "./Pages/Profile/Profile";
import More from "./Pages/More/More";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Sign in/Signin";
import { auth } from "./Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isThereUser, setIsThereUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsThereUser(user);
      } else {
        setIsThereUser(null);
      }
    });
  });

  return isThereUser ? (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="messages" element={<Messages />} />
      <Route path="bookmark" element={<Bookmarks />} />
      <Route path="lists" element={<Lists />} />
      <Route path="profile" element={<Profile />} />
      <Route path="more" element={<More />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
