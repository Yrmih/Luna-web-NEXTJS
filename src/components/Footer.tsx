"use client";
import { Grid, Paper } from "@mui/material";
import { Copyright } from "./Copyright";

const drawerWidth = 240;
export default function Footer() {
  return (
    <>
      <Grid
      mt={5}
      component={Paper}
      p={2}
      container
      flexDirection={"row"}
      alignItems="center"
      textAlign={"center"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        boxShadow: "0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
      }}
    >
      <Grid
        sx={{ ml: { xs: "none", md: `${drawerWidth}px` } }}
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        item
        xs={12}
        sm={4}
        md={4}
        lg={12}
        xl={12}
      >
        <Copyright />
      </Grid>
    </Grid>
    </>
  );
}
