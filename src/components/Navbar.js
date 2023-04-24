import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent='space-between'
        marginTop='20px'
        marginLeft={'50px'}>
      <Link to={'/'}> <img src={Logo} alt="Logo" style={{width: '48px', height: '48px'}}/> </Link>
      <Stack 
        direction={'row'}
        gap='40px'
        fontSize={'24px'}
        alignItems={'flex-end'}>
        <Link to={'/'} style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href='#exercises' style={{position: 'relative', textDecoration: 'none', color: '#3A1212', paddingBottom: '3px'}} className='top-link'>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
