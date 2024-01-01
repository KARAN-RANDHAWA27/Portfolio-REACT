import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { Element } from "react-scroll";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const form = useRef();
  const handleNameChange = (event) => {
    const updatedValue = event.target.value.replace(/[^A-Za-z]/g, "");
    setName(updatedValue);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    const updatedValue = event.target.value.replace(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$,/g,
      ""
    );
    setEmail(updatedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bd6omkv",
        "template_ext8tjb",
        form.current,
        "H2xDnK8Bw8V0cPJpp"
      )
      .then(
        (result) => {
          setDone(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact" className="section">
      <Grid container spacing={2}>
        <Grid item xs={12} className="box_text">
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
                sx={{
                  color: "var(--yellow)",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                Get in touch
              </Typography>
              <Typography
                variant="h6"
                color="#fff"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                }}
              >
                Contact Me
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={6}>
                  <Card elevation={3}>
                    <CardContent className="custom-grid">
                      <Box
                        margin="0"
                        display="flex"
                        className="col-md-12 custom-alert alert alert-warning box_space"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <form
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            marginBottom: 6,
                            marginTop: 6,
                          }}
                          ref={form}
                        >
                          <TextField
                            focused
                            label="Name"
                            variant="outlined"
                            value={name}
                            color="warning"
                            sx={{ marginBottom: 4 }}
                            onChange={handleNameChange}
                            inputProps={{
                              maxLength: 30,
                              style: { color: "white" },
                              name: "Name",
                            }}
                            fullWidth
                          ></TextField>
                          <TextField
                            focused
                            label="E-mail"
                            variant="outlined"
                            color="warning"
                            onChange={handleEmailChange}
                            value={email}
                            inputProps={{
                              maxLength: 30,
                              style: { color: "white" },
                              name: "Email",
                            }}
                            sx={{ marginBottom: 4 }}
                            fullWidth
                          ></TextField>
                          <TextField
                            focused
                            label="Message"
                            variant="outlined"
                            color="warning"
                            onChange={handleMessageChange}
                            value={message}
                            inputProps={{
                              style: { color: "white" },
                              name: "Message",
                            }}
                            fullWidth
                            multiline
                            rows={3} // Set the number of visible rows
                            sx={{ marginBottom: 2 }}
                          ></TextField>
                          <Button
                            className="button"
                            disabled={
                              name === "" || email === "" || message === ""
                            }
                            onClick={handleSubmit}
                          >
                            Send
                          </Button>
                        </form>
                      </Box>
                    </CardContent>
                    <Typography className="custom-grid" color="#fff">
                      {done && "Thanks for Contacting me"}
                    </Typography>
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

export default Contact;
