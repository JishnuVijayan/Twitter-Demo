import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import "./Explore.css";
import Button from '@mui/material/Button';


import Drawer from "../../components/Drawer";

export default function Explore() {
  return (
    <div className="Drawer">
      <Drawer />
      <div>

        <div className="exp">


          <div className="setting_search">
            <div className="searchbar">
              <SearchIcon className="searchicon" />
              <input type="text" placeholder="Search Here" />

            </div>
            <SettingsIcon className="settings"></SettingsIcon>
          </div>
          <div className="tabs">

            <div className="for_you">
              <Button className="buttons">For you</Button>
            </div>
            <div className="trendings">
              <Button className="buttons">Trending</Button>
            </div>
            <div className="news">
              <Button className="buttons">News</Button>
            </div>
            <div className="sports">
              <Button className="buttons">Sports</Button>
            </div>
            <div className="entertainment">
              <Button className="buttons">Entertainment</Button>
            </div>

          </div>




          <div className="tabs_details">
            <h1>feed</h1>
          </div>






          <div className="widgets__container">
            <h2 className="h2">Who to Follow </h2>
            <Follows
              avatar="https://pbs.twimg.com/profile_images/1525792228219621376/92apKFLn_400x400.jpg"
              disname="Sayand Kk"
              tag="sayand_kk"
              link="https://twitter.com/sayand_kk"
            />
            <Follows
              avatar="https://pbs.twimg.com/profile_images/1525792228219621376/92apKFLn_400x400.jpg"
              disname="Sayand Kk"
              tag="sayand_kk"
              link="https://twitter.com/sayand_kk"
            />
          </div>


        </div>





      </div>
    </div>

  );
}
