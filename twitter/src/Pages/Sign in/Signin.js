import { Box } from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { auth, googleProvider } from "../../Config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
export default function Signin(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: 370,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TwitterIcon
          sx={{
            color: "#26a7de",
          }}
        />

        <h2
          style={{
            color: "#26a7de",
          }}
        >
          Signin to Twitter
        </h2>
        <TextField
          fullWidth
          id="fullWidth"
          label="Username"
          variant="standard"
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          fullWidth
          id="fullWidth"
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          fullWidth
          disableElevation
          sx={{
            borderRadius: 2,
            backgroundColor: "#26a7de",
            marginTop: 2,
          }}
          variant="contained"
          onClick={signIn}
        >
          Signin
        </Button>
        <div style={{ display: "inline", gap: 25 }}>
          <Link to={"/"} style={{ color: "#26a7de" }}>
            Login for Twitter?{" "}
          </Link>
          <IconButton onClick={signInWithGoogle}>
            <GoogleIcon sx={{ color: "#4285F4" }} />
          </IconButton>
        </div>
      </Box>
    </div>
  );
}
