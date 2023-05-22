import Grid from "@mui/material/Grid";
import Drawer from "../../components/Drawer";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import "./Home.css";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Grid className=".home" container>
        <Drawer />
        <Posts />
        <Search />
      </Grid>
    </div>
  );
}

export default App;
