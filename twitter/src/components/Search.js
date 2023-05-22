import React from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Follows from "./Follows";
import "./search.css";
import Avatar from "@mui/material/Avatar";
import {
  TwitterTimelineEmbed,
  Tweet,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default function Search() {
  return (
    <Grid item xs={4}>
      <div className="right_side">
        <div className="searchbar">
          <SearchIcon className="searchicon" />
          <input type="text" placeholder="Search Here" />
        </div>

        <div className="trending">
          <h2>Whats happing</h2>
          <hr />
          <TwitterTweetEmbed tweetId="1653744708093452289" />
          <TwitterTweetEmbed tweetId="1653744708093452289" />
          <TwitterTweetEmbed tweetId="1653744708093452289" />
          <TwitterTweetEmbed tweetId="1653744708093452289" />
        </div>

        <div className="widgets__container">
          <h2 className="h2">Who to Follow </h2>
          <Follows avatar="https://pbs.twimg.com/profile_images/1525792228219621376/92apKFLn_400x400.jpg" disname="Sayand Kk" tag="sayand_kk" link="https://twitter.com/sayand_kk" />
          <Follows avatar="https://pbs.twimg.com/profile_images/1525792228219621376/92apKFLn_400x400.jpg" disname="Sayand Kk" tag="sayand_kk" link="https://twitter.com/sayand_kk" />
        </div>



        {/* <div className="p1">
          <h1> Who to follow</h1>
          <div className="profile">
            <div className="1">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

              <h1 className="h">rathesh</h1>
              <a
                className="a"
                href="https://twitter.com/PicturesFoIder?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
              >
                Follow
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
              <hr></hr>

              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

              <h1 className="h">radha</h1>
              <a
                className="a"
                href="https://twitter.com/PicturesFoIder?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
              >
                Follow{" "}
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
              <hr></hr>

              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

              <h1 className="h">rakesh</h1>
              <a
                className="a"
                href="https://twitter.com/PicturesFoIder?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
              >
                Follow
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
              <hr></hr>
            </div>
          </div>
        </div> */}
      </div>
    </Grid>
  );
}
