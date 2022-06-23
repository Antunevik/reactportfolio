import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Button, TextField, Typography, Box } from "@mui/material";

const GetInTouch = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8t2mxq",
        "template_kkoopep",
        form.current,
        "4FuLkEnFbdlRnFM0Y"
      )
      .then(
        (result) => {
          console.log(result);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Box
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <Typography variant="h4">Like what you see?</Typography>

        <Grid
          container
          p={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Name"
                multiline
                type="text"
                name="user_name"
                helperText="Please enter your name"
              />

              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Email"
                multiline
                type="email"
                name="user_email"
                helperText="Please enter your Email"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
                name="message"
              />

              <Button variant="outlined" type="submit" value="Send">
                Send
              </Button>
            </form>
          </Grid>
          <Grid item md={6}>
            <Typography>
              As of now I'm currently looking for a position as a frontend
              developer. If you're a recruiter and like what you see, feel free
              to connect with me either via LinkedIn or use this form.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GetInTouch;
