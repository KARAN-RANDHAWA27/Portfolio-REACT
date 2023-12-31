import React from "react";
import "./footer.css";
import wave from "../../img/wave.png";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // <div className="footer">
    //     <img src={wave} alt="" style={{ width: '100%' }} />
    //     <div className="f-content">
    //         <span>karandeeprandhawa27@gmail.com</span>
    //         <div className="f-icons">
    //             <Insta color='white' size='3rem'></Insta>
    //             <Facebook color='white' size='3rem'></Facebook>
    //             <Git color='white' size='3rem'></Git>
    //         </div>
    //     </div>
    // </div>
    <Grid container direction="row" justifyContent="space-between">
      <Grid item xs={12} className="footer">
        <Grid item xs={12}>
          <Card elevation={3} className="footer-content">
            <Typography variant="caption" marginRight={15}>
              &copy; {currentYear} Karan Randhawa All Rights Reserved.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
