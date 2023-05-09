import React from "react";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const text = {
  fontWeight: "bolder",
  color: "#26a7de",
};
const text2 = {
  fontWeight: "bolder",
};

export default function Drawer() {
  return (
    <Grid item xs={3}>
      <TwitterIcon style={{ color: "#26a7de", margin: 20 }}></TwitterIcon>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon
            style={{
              color: "#26a7de",
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
            }}
          ></HomeIcon>
        </ListItemIcon>

        <ListItemText
          primaryTypographyProps={{
            style: text,

            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Home"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NotificationsNoneOutlinedIcon
            style={{
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
          ></NotificationsNoneOutlinedIcon>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Notifications"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MailOutlineOutlinedIcon
            style={{
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
          ></MailOutlineOutlinedIcon>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Messages"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BookmarkBorderOutlinedIcon
            style={{
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
          ></BookmarkBorderOutlinedIcon>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Bookmarks"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ListAltOutlinedIcon
            style={{
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
          ></ListAltOutlinedIcon>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Lists"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar
            style={{
              width: 25,
              height: 25,
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          ></Avatar>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="Profile"
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MoreHorizRoundedIcon
            style={{
              margin: -0,
              marginTop: 2,
              marginBottom: -6,
              stroke: "black",
              strokewidth: 3,
            }}
          ></MoreHorizRoundedIcon>
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            style: text2,
            marginLeft: -3,
            marginTop: 1,
          }}
          primary="More"
        />
      </ListItemButton>
      <Button
        style={{
          borderRadius: 25,
          width: 250,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 30,
        }}
        variant="contained"
      >
        <p style={{ fontWeight: "bolder", textTransform: "none" }}>Tweet</p>
      </Button>
    </Grid>
  );
}

