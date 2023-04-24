import React from 'react'
import {Box, Typography, Button} from '@mui/material'

import ImageHeroBanner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <>
    <Box
      position={'relative'} 
      p='20px'
      sx={{mt: { lg: '190px', xs: '70px' },
          ml: {sm: '50px'}}}>
      <Typography color={'#FF2625'}
          fontWeight={600}
          fontSize={'30px'}
          mb='20px'
        >
        Fitness Club
      </Typography>
      <Typography 
        fontWeight={700}
        fontSize={'44px'}
        >Sweat, Smile <br /> and Repeat</Typography>
      <Typography
        fontSize={'22px'}
        lineHeight={'35px'}
        mb={4}
        whiteSpace='nowrap'
      >Check out the most effective exercises</Typography>
      <Button variant='contained' color='success' href='#exercises' style={{background: '#FF2625'}}>Explore Exercises</Button>
      <Typography 
        fontWeight={700}
        color='#ff2625'
        sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}}
        fontSize='200px'
        marginTop={'30px'}
      >Exercises</Typography>
    </Box>
      <img src={ImageHeroBanner} alt='Banner' className='hero-banner-img'/>
    </>
  )
}

export default HeroBanner
