import "./App.css";
import Grid from "@mui/material/Grid";
import Drawer from "./components/Drawer";
import Posts from "./components/Posts";
import Search from "./components/Search";

function App() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Drawer></Drawer>
      <Posts></Posts>
      <Search></Search>
    </Grid>
  );
}

export default App;
