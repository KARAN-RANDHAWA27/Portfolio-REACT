import React, { useState } from "react";
import "./projects.css";
import Tic_Tac_Toe from "../Tic Tac Toe/Game";
import {
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Projects = () => {
  const [openGame, setOpenGame] = useState(false);
  const [openTimer, setOpenTimer] = useState(false);

  const handleTicTacToe = () => {
    setOpenGame(true);
  };

  const handleTimer = () => {
    setOpenTimer(true);
  };

  const handleClose = () => {
    setOpenGame(false);
    setOpenTimer(false);
  };

  return (
    <Element name="projects" className="section">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            elevation={3}
            className="box_text"
            sx={{
              backgroundImage:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              color: "transparent",
              backgroundClip: "text",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: "var(--yellow)",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                Projects
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <a
                    href="https://github.com/KARAN-RANDHAWA27/Sangeet"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Card elevation={3}>
                      <CardContent className="custom-grid">
                        <Typography variant="h6" color="#fff">
                          Sangeet
                        </Typography>
                        <Box className="col-md-12 custom-alert alert alert-danger box_space">
                          HTML, CSS, Javascript, Bootstrap
                        </Box>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
                <Grid item xs={12} md={4}>
                  <a
                    href="https://github.com/KARAN-RANDHAWA27/Portfolio-Template"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Card elevation={3}>
                      <CardContent className="custom-grid">
                        <Typography variant="h6" color="#fff">
                          Portfolio Template
                        </Typography>
                        <Box className="col-md-12 custom-alert alert alert-info box_space">
                          HTML, CSS, Javascript, Animation
                        </Box>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
                <Grid item xs={12} md={4}>
                  <a
                    href="https://github.com/KARAN-RANDHAWA27/Snake-And-Momo"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Card elevation={3}>
                      <CardContent className="custom-grid">
                        <Typography variant="h6" color="#fff">
                          Snake Game
                        </Typography>
                        <Box className="col-md-12 custom-alert alert alert-info box_space">
                          HTML, CSS, Python, Pygame
                        </Box>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  style={{ cursor: "pointer" }}
                  // onClick={handleTicTacToe}
                >
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Tic Tac Toe
                      </Typography>
                      <Box className="col-md-12 custom-alert alert alert-success box_space">
                        HTML, CSS, Javascript, ReactJS
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Socialize
                      </Typography>
                      <Box className="col-md-12 custom-alert alert alert-info box_space">
                        HTML, CSS, Javascript
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        E- Commerce
                      </Typography>
                      <Box className="col-md-12 custom-alert alert alert-success box_space">
                        HTML, CSS, Javascript, ReactJS
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  style={{ cursor: "pointer" }}
                  // onClick={handleTicTacToe}
                >
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Stopwatch
                      </Typography>
                      <Box className="col-md-12 custom-alert alert alert-success box_space">
                        HTML, CSS, Javascript
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Dialog open={openGame} fullWidth>
          <DialogTitle title="TIC TAC TOE">
            <Tic_Tac_Toe></Tic_Tac_Toe>
          </DialogTitle>
        </Dialog>
        <Dialog open={openTimer} fullWidth>
          <DialogTitle title="Stopwatch">
            <Tic_Tac_Toe></Tic_Tac_Toe>
          </DialogTitle>
        </Dialog>
      </Grid>
    </Element>
  );
};

export default Projects;
