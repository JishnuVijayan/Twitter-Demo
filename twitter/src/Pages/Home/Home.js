import Grid from "@mui/material/Grid";
import React from "react";
import Drawer from "../../components/Drawer";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const matchesMobile = useMediaQuery("(max-width:600px)");
  return matchesMobile ? (
    <div>
      <ResponsiveDrawer
        mobile={mobileOpen}
        handl
        DrawerToggle={handleDrawerToggle}
      />

      <Grid container item xs={12} sx={{ overflowX: "unset" }}>
        {" "}
        <Posts />
      </Grid>
    </div>
  ) : (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Drawer />
        </Grid>

        <Grid item xs={5}>
          <Posts />
        </Grid>
        <Grid item xs={4}>
          <Search></Search>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
