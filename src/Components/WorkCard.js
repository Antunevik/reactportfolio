import React from "react";
import { Divider, Typography, Grid, Stack, Button, Chip } from "@mui/material";

const WorkCard = ({ image, title, chip, body, cta1, cta2 }) => {
  console.log({ image, title, chip, body, cta1, cta2 });
  return (
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
        <img src={image} alt={title} style={{ width: "100%" }} />
      </Grid>
      <Grid
        item
        p={2}
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography>
          {title} <Chip label={chip} />{" "}
        </Typography>
        <Typography>{body}</Typography>
        <Stack direction={"row"} spacing={2}>
          <Button>Preview</Button>
          <Button>Github Repo</Button>
        </Stack>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default WorkCard;
