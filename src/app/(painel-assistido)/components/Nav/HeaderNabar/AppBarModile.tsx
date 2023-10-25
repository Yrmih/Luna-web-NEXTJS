"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";
interface DrawerProps {
  handleDrawerToggle: () => void;
}
export function AppBarModile(props: DrawerProps){
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        display: { xs: "flex", md: "none" },
        backgroundColor: theme.palette.background.paper,
        pb: 0.5,
        pt: 2,

      }}
    >
      <Container maxWidth={"md"} >
        <Toolbar>
          <Box sx={{
            flexGrow: 1, display: { xs: "flex", md: "none" },
            justifyContent: "flex-start",
            alignItems: 'center', }}>
            <IconButton
              color="primary"
              size="large"
              aria-label="open drawer"
              aria-haspopup="true"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{
                justifyContent: "flex-start",
                alignItems:'center',
                display: { md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Área do Assistido
            </Typography>
          </Box>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Avatar>A</Avatar>
              </Badge>
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
