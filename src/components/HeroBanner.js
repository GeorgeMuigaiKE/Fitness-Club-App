import React from 'react'
import {Box, Typography, Button} from '@mui/material'

import ImageHeroBanner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      position={'relative'} 
      sx={{mt: { lg: '140px', xs: '70px' }}}>
      <Typography color={'#FF2625'}
          fontWeight={600}
          fontSize={'30px'}
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
        mb={2}
      >Check out the most effective exercises</Typography>
      <Button variant='contained' color='success' href='#exercises' style={{background: '#FF2625'}}>Explore Exercises</Button>
      <img src={ImageHeroBanner} alt='Banner'
      />
    </Box>
  )
}

export default HeroBanner
