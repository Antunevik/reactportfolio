import "./App.css";
import { Container, Grid } from "@mui/material";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import GetInTouch from "./Components/GetInTouch";
import LandingPage from "./Components/LandingPage";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "text.primary",
          bgcolor: "background.default",
        }}
      >
        <Grid container>
          <LandingPage />
          <AboutMe />
        </Grid>
        <MyWork />

        <GetInTouch />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
