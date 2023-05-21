import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Tweetbox.css";
import Button from "@mui/material/Button";
import "./Post.css";
import FirstImage from "../assets/image.jpg";
import SecondImage from "../assets/image2.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const posts = [
  {
    id: 1,
    image: FirstImage,
    text: "What a Sunny day!!...Blessed by the nature!!! for more updates check",
    link: "www.google.com",
    title: "Shrimp and Chorizo Paella",
    subheader: "@digitalworld ",
    avtarImage: require("../assets/image.jpg"),
  },
  {
    id: 2,
    image: SecondImage,
    text: "Hello there whatsup??",
    link: "www.twitter.com",
    title: "JishnuVijayan",
    subheader: "#jv03 ",
    avtarImage: require("../assets/image2.jpg"),
  },
];

export default function RecipeReviewCard() {
  const [expanded] = React.useState(false);
  const [Cards, setCards] = useState(posts);
  const isActive = useState(false);
  const matchesMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <h2
        className={!matchesMobile ? "header" : ""}
        style={{ color: "#000", marginTop: matchesMobile ? 0 : "" }}
      >
        Home
      </h2>
      <div className="post">
        <Box sx={{ width: matchesMobile ? "95%" : "95%" }}>
          <div className="text">
            <TextField
              style={{
                display: "flex",
                width: matchesMobile ? "95%" : "100%",
              }}
              label="What is happening!"
              id="fullWidth"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{
                borderRadius: 25,
                width: matchesMobile ? 70 : 150,
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
          </div>
        </Box>
        {Cards.map((post) => (
          <Card sx={{ maxWidth: matchesMobile ? 320 : "95%" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], marginLeft: -1 }}
                  aria-label="recipe"
                  src={post.avtarImage}
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.title}
              subheader={post.subheader}
            />
            <p>{post.text}</p>
            <Link>{[post.link]}</Link>
            <CardMedia
              component="img"
              height="400"
              src={post.image}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon sx={{ paddingLeft: 50 }} />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}
