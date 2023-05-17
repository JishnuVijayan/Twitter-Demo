import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function Search({ children }) {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <Card
        style={{
          border: "10px solid rgba(10, 20, 40, 0.05)",
          marginTop: 40,
        }}
      >
        {children}
      </Card>
    </div>
  );
}
