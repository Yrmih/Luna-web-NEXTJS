"use client";
import styles from "@/styles/copyright.module.css";
import { Box, Grid, Link, Typography, useTheme } from "@mui/material";
import { Copyright } from "./Copyright";

export default function Footer() {
    return (
        <footer>
            <Grid

                container
                flexDirection={"row"}
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                textAlign={"center"}
                justifyContent={{ xs: "center", sm: "space-between" }}
                width={"100%"}
                rowSpacing={1}
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                }}
            >
                <Grid
                    flexDirection={"column"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={'center'}
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
        </footer>
    );
}
