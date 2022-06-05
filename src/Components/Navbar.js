import "../App.css";
import { IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  return (
    <div id="navbar">
      <Box>
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
      </Box>
    </div>
  );
};

export default Navbar;
