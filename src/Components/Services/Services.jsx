import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="skills" className="section">
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
                What I Know
              </Typography>
              <Grid container spacing={2}>
                {/* Frontend */}
                <Grid item xs={12} md={4}>
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Frontend
                      </Typography>
                      <Box className="col-md-5 custom-alert alert alert-dark box_space">
                        HTML
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-secondary box_space">
                        CSS
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-success box_space">
                        JavaScript
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-danger box_space">
                        React Js
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-warning box_space">
                        Tailwind
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-info box_space">
                        MUI
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-dark box_space">
                        Bootstrap
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Backend */}
                <Grid item xs={12} md={4}>
                  <Card elevation={3} className="box_text">
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Backend
                      </Typography>
                      <Box className="col-md-5 custom-alert alert alert-dark box_space">
                        Python
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-info box_space">
                        Django
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-success box_space">
                        RESTful API
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-info box_space">
                        Authentication and Authorization
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Database */}
                <Grid item xs={12} md={4}>
                  <Card elevation={3} className="box_text">
                    <CardContent className="custom-grid">
                      <Typography variant="h6" color="#fff">
                        Database
                      </Typography>
                      <Box className="col-md-5 custom-alert alert alert-info box_space">
                        MySQL
                      </Box>
                      <Box className="col-md-5 custom-alert alert alert-info box_space">
                        MongoDB
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Services;
