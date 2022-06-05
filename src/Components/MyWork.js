import React from "react";
import WorkCard from "./WorkCard";
import { Box } from "@mui/material";
import image from "../img/isak.jpeg";

const MyWork = () => {
  const projects = [
    {
      image: image,
      title: "Agyle Intelligence",
      chip: "2019",
      body: "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
      cta1: "https://jonny.me/",
      cta2: "https://jonny.me/",
    },
    {
      image: image,
      title: "Agyle Intelligence",
      chip: "2019",
      body: "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
      cta1: "https://jonny.me/",
      cta2: "https://jonny.me/",
    },
    {
      image: image,
      title: "Agyle Intelligence",
      chip: "2019",
      body: "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
      cta1: "https://jonny.me/",
      cta2: "https://jonny.me/",
    },
  ];

  return (
    <>
      <Box container>
        {projects.map((project, i) => (
          <WorkCard {...project} key={i} />
        ))}
      </Box>
    </>
  );
};

export default MyWork;
