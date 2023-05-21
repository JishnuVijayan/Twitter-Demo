import React from "react";
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

function App() {
  return (
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
  );
}

export default App;
