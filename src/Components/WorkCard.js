import React from "react";
import {
  Divider,
  Typography,
  Grid,
  Stack,
  Button,
  Chip,
  Box,
} from "@mui/material";

const WorkCard = ({ image, title, chip, body, cta1, cta2 }) => {
  console.log({ image, title, chip, body, cta1, cta2 });
  return (
    <>
      <Grid
        container
        py={5}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ marginRight: "20px" }}>{title}</Typography>
            <Chip label={chip} />
          </Box>

          <Typography>{body}</Typography>
          <Stack direction={"row"} spacing={2}>
            <Button href={cta1} target="_blank">
              Preview
            </Button>
            <Button href={cta2} target="_blank">
              Github Repo
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Divider
        variant="fullWidth"
        sx={{ bgcolor: "darkgray" }}
        xs={12}
        md={6}
      />
    </>
  );
};

export default WorkCard;
