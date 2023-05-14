import React from "react";
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

export default function RecipeReviewCard() {
  const [expanded] = React.useState(false);

  return (
    <Grid className="post" item xs={5}>
      <Box className="boxdesign">
        <h style={{ fontWeight: 800 }}>Home</h>
        <div className="text">
          <TextField
            style={{ verticalAlign: "center" }}
            fullWidth
            label="What is happening!"
            id="fullWidth"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{
              borderRadius: 25,
              width: 150,
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
      <Card sx={{ maxWidth: 560 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], marginLeft: -1 }}
              aria-label="recipe"
              src={require("../assets/image.jpg")}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="@digitalworld"
        />
        <p>
          What a Sunny day!!...Blessed by the nature!!! for more updates check -
        </p>
        <Link>www.google.com</Link>
        <CardMedia
          component="img"
          height="400"
          src={require("../assets/image.jpg")}
          alt="Paella dish"
        />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon style={{ marginLeft: 500 }} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      </Card>

      <Card sx={{ maxWidth: 560 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], marginLeft: -1 }}
              aria-label="recipe"
              src={require("../assets/image2.jpg")}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="@digitalworld"
        />
        <p>
          Vidhya is kozhi but she is also a kuthithirupp.... for more updates
          check -
        </p>
        <Link>www.kozhividhya.com</Link>
        <CardMedia
          component="img"
          height="400"
          src={require("../assets/image2.jpg")}
          alt="Paella dish"
        />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon style={{ marginLeft: 500 }} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      </Card>
    </Grid>
  );
}
