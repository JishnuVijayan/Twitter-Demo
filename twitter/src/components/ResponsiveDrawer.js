import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { signOut } from "firebase/auth";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logout = async () => {
    signOut(auth);
  };

  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "Home",
      icons: <HomeIcon />,
      color: location.pathname.includes("/home") ? "#26a7de" : "#000",
      onClick: () => navigate("/home"),
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
    {
      id: 9,
      title: "Logout",
      icons: <LogoutIcon />,
      onClick: () => {
        navigate("/");
        logout();
      },
    },
  ]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            borderRadius: 25,
            width: 120,
            height: 45,
            textTransform: "none",
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
          variant="contained"
        >
          Tweet
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 0.5, display: { sm: "none" } }}
      >
        <MenuIcon style={{ overflow: "visible" }} />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "inherit",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
