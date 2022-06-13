import React from "react";
import Isak from "../../img/isak.jpeg";
import { Box, Typography, Grid } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            fontWeight: {
              xs: 300, // theme.breakpoints.up('xs')
              sm: 400, // theme.breakpoints.up('sm')
              md: 500, // theme.breakpoints.up('md')
              lg: 600, // theme.breakpoints.up('lg')
              xl: 700, // theme.breakpoints.up('xl')
            },
            fontSize: {
              xs: 12, // theme.breakpoints.up('xs')
              sm: 14, // theme.breakpoints.up('sm')
              md: 16, // theme.breakpoints.up('md')
              lg: 18, // theme.breakpoints.up('lg')
              xl: 18, // theme.breakpoints.up('xl')
            },
          }}
        >
          <Typography>
            I'm a 21-year old frontend developer specialized in the MERN stack.
            I'm based in Köping, Sweden. I have a passion for building and
            designing web applications and innovating new design and semantic
            solutions.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        pb={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Isak}
          alt="img"
          style={{
            height: 400,
            width: 270,
            borderRadius: 50,
          }}
        />
      </Grid>
    </>
  );
};

export default AboutMe;
