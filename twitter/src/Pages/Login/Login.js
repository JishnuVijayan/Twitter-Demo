import { Box } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          Log in to Twitter
        </h2>

        <TextField
          fullWidth
          id="fullWidth"
          label="phone,e-mail or username"
          variant="standard"
        />

        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
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
          onClick={() => navigate("/home")}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
