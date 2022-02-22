import React from 'react'
import Slider from "react-slick";
import {Container, Typography} from '@mui/material';

export default function Sliders() {
    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
            }
          }
        ]
    };
  return (
    <Container maxWidth='xl'>
      <Slider {...settings}>
        <Typography variant='h3'> Banner 1 </Typography>
        <Typography variant='h3'> Banner 2 </Typography>
        <Typography variant='h3'> Banner 3 </Typography>
      </Slider>
    </Container>
  )
}
