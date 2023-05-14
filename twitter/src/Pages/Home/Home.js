import Grid from "@mui/material/Grid";
import Drawer from "../../components/Drawer";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import "./Home.css";

function App() {
  return (
    <Grid className=".home" container>
      <Drawer />
      <Posts />
      <Search>Hello World!</Search>
    </Grid>
  );
}

export default App;
