import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import {Box} from '@mui/material';
import Banner1 from '../../public/images/banner1.jpg'

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
        pauseOnHover:false,
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
    <Slider {...settings}>
      <Box>
        <Image src={Banner1} alt="Banner one"/>
      </Box>
      <Box>
        <Image src={Banner1} alt="Banner Two"/>
      </Box>
      <Box>
        <Image src={Banner1} alt="Banner Three"/>
      </Box>
      <Box>
        <Image src={Banner1} alt="Banner Four"/>
      </Box>
    </Slider>
  )
}
