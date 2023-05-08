import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        1
      </Grid>
      <Grid item xs={5}>
        2
      </Grid>
      <Grid item xs={4}>
        3
      </Grid>
    </Grid>
  );
}

export default App;
