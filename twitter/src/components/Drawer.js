import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TagIcon from "@mui/icons-material/Tag";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate, useLocation } from "react-router-dom";

export default function Drawer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "Home",
      icons: <HomeIcon />,
      color: location.pathname === "/" ? "#26a7de" : "#000",
      onClick: () => navigate("/"),
    },
    {
      id: 2,
      title: "Explore",
      icons: <TagIcon />,
      color: location.pathname.includes("explore") ? "#26a7de" : "#000",
      onClick: () => navigate("/explore"),
    },
    {
      id: 3,
      title: "Notifications",
      icons: <NotificationsNoneOutlinedIcon />,
      color: location.pathname.includes("notifications") ? "#26a7de" : "#000",
      onClick: () => navigate("/notifications"),
    },
    {
      id: 4,
      title: "Messages",
      icons: <MailOutlineOutlinedIcon />,
      color: location.pathname.includes("messages") ? "#26a7de" : "#000",
      onClick: () => navigate("/messages"),
    },
    {
      id: 5,
      title: "Bookmark",
      icons: <BookmarkBorderOutlinedIcon />,
      color: location.pathname.includes("bookmark") ? "#26a7de" : "#000",
      onClick: () => navigate("/bookmark"),
    },
    {
      id: 6,
      title: "Lists",
      icons: <ListAltOutlinedIcon />,
      color: location.pathname.includes("lists") ? "#26a7de" : "#000",
      onClick: () => navigate("/lists"),
    },
    {
      id: 7,
      title: "Profile",
      icons: (
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
          src={require("../assets/image2.jpg")}
        />
      ),
      color: location.pathname.includes("profile") ? "#26a7de" : "#000",
      onClick: () => navigate("/profile"),
    },
    {
      id: 8,
      title: "More",
      icons: <MoreHorizRoundedIcon />,
      color: location.pathname.includes("more") ? "#26a7de" : "#000",
      onClick: () => navigate("/more"),
    },
  ]);

  return (
    <Grid item xs={3}>
      <TwitterIcon style={{ color: "#26a7de", margin: 20 }}></TwitterIcon>
      <List>
        {listItems.map((item) => (
          <ListItem onClick={() => item?.onClick()} disablePadding>
            <ListItemButton>
              <ListItemIcon
                style={{
                  color: item.color,
                }}
              >
                {item.icons}
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={{
                  style: {
                    color: item.color,
                    fontWeight: "700",
                  },
                  marginLeft: -2,
                }}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        style={{
          borderRadius: 25,
          width: 250,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 30,
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
        variant="contained"
      >
        Tweet
      </Button>
    </Grid>
  );
}
