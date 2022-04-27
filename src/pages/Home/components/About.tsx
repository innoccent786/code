import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

import RoundedImage from "./RoundedImage";

const WhyBox = styled<any>("div")(({ theme, index }) => ({
  backgroundImage: "linear-gradient(180deg, #F6522F 0%, #8A5443 100%)",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(12, 8),
  alignItems: "center",
  display: "flex",
  height: "100%",

  ".title": {
    letterSpacing: 5,
  },
}));

const About: React.FC<any> = (props) => {
  const animation = {
    "data-aos-mirror": "true",
    "data-aos-once": "true",
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} data-aos="fade-left" {...animation}>
        <RoundedImage
          src="https://via.placeholder.com/600x600/09f/fff.png"
          style={{ width: "100%" }}
          alt="example"
        />
      </Grid>
      <Grid data-aos="fade-left" {...animation} xs={12} md={6} item>
        <WhyBox>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography className="title" variant="h6" component="p">
                Lorem ipsum dolor sit.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                reprehenderit eligendi, ducimus enim.
              </Typography>
              <br />
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                reprehenderit eligendi, ducimus enim cumque officia accusamus
                laborum tempore aliquid dicta alias accusantium eius dolorem
                incidunt?
              </Typography>
              <br />
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                incidunt?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button size="large" variant="contained">
                Get Started
              </Button>
            </Grid>
          </Grid>
        </WhyBox>
      </Grid>
      
    </Grid>
  );
};

export default About;
