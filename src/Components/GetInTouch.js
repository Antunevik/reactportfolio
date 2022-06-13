import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Typography, Button, TextareaAutosize } from "@mui/material";

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
    <Grid container>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </Grid>
  );
};

export default GetInTouch;
