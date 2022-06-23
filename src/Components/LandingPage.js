import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box>
            <Typography variant="h3">Hi, my name is</Typography>
            <Typography variant="h2">Isak Antunevik</Typography>
            <Typography variant="h5">
              I'm a Junior Frontend Developer.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </>
  );
};

export default LandingPage;
