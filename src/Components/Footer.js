import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography, Grid, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Grid item xs={12} md={6}>
          <IconButton href="https://github.com/Antunevik" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/isak-antunevik/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/antuneviik/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography>Isak Antunevik ©2022</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
