import Grid from "@mui/material/Grid";
import Drawer from "../../components/Drawer";
import Posts from "../../components/Posts";
import Search from "../../components/Search";


function App() {
  return (
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
