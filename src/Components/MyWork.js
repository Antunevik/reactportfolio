import React from "react";
import WorkCard from "./WorkCard";
import { Box, Typography } from "@mui/material";
import image from "../img/isak.jpeg";
import klarna from "../img/klarna-checkout.png";
import spotify from "../img/spotify-clone.png";

const MyWork = () => {
  const projects = [
    {
      image: spotify,
      title: "Spotify Clone",
      chip: "2022",
      body: "I've built a clone of Spotify's web player with their API. You're able to login and stream your music, see your personal playlists and search for songs.",
      tech: "Javascript, React, Redux Spotify API, CSS",
      cta1: "https://jonny.me/",
      cta2: "https://github.com/Antunevik/spotify-clone",
    },
    {
      image: klarna,
      title: "Klarna Chekout Integration",
      chip: "2022",
      body: "I built Klarna's Checkot using thier API, which can be used as an independent payment portal, but also can be intergrated in e-commerce sites.",
      tech: "Javascript, NodeJS, Express, Express-Handlebars, Klarna API",
      cta1: "https://antuneviks-kco.herokuapp.com/2",
      cta2: "https://github.com/Antunevik/Klarna-Checkout",
    },
  ];

  return (
    <>
      <Box container>
        <Typography variant="h4">My projects so far</Typography>
        {projects.map((project, i) => (
          <WorkCard {...project} key={i} />
        ))}
      </Box>
    </>
  );
};

export default MyWork;
