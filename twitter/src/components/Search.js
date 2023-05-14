import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
export default function Search({ children }) {
  return (
    <Grid
      item
      xs={4}
      style={{ backgroundColor: "aqua", display: "flex", overflow: "auto" }}
    >
      <Card
        style={{
          border: "10px solid rgba(10, 20, 40, 0.05)",
          marginTop: 40,
        }}
      >
        {children}
      </Card>
    </Grid>
  );
}
