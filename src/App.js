import "./App.css";
import { Container, Button, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import GetInTouch from "./Components/GetInTouch";
import LandingPage from "./Components/LandingPage";
import MyWork from "./Components/MyWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid container>
          <LandingPage />
          <AboutMe />
        </Grid>
        <MyWork />

        <GetInTouch />
        <Button variant="contained">Click ME</Button>
      </Container>
    </div>
  );
}

export default App;
