import react from "react";
import "../App.css";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Navbar = () => {
  return (
    <div id="navbar">
      <h2>Isak Antunevik</h2>
      <IconButton href="https://github.com/Antunevik" target="_blank">
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/isak-antunevik/"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </div>
  );
};
