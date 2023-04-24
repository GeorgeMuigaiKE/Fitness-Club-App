import React, {useEffect, useState} from 'react'
import {Box, Stack, Button, TextField, Typography} from '@mui/material'
import {fetchData, exerciseOptions } from '../utils/fetchData'

const SearchExercises = () => {

  const [Search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {      
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)  
      setBodyParts(['all', bodyPartsData])
    }

  }, [])
  

  const handleSearch = async () => {
    if (Search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(Search) 
        || exercise.bodyPart.toLowerCase().includes(Search)
        || exercise.equipment.toLowerCase().includes(Search)
        || exercise.target.toLowerCase().includes(Search))

        setSearch('')
        setExercises(searchedExercises)
    }
  }

  return (
    <div>
      <Stack alignItems={'center'}
        justifyContent='center'
        width='100%'
        className='search-exercises'
        
      >
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} textAlign='center' mb={'50px'}>
          Awesome Exercises <br/>
          You Should Know
        </Typography>
        <Box position={'relative'} mb='72px'>
          <TextField
            sx={{
              input: {
                fontWeight: '700',
                border: 'none',
                borderRadius: '4px'
              },
              width: {lg: '1170px', xs: '350px'},
              backgroundColor: "#fff", borderRadius: '40px'
            }}
            height='76px'
            value={Search}
            onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
            inputProps={{
              "aria-readonly": false
            }}
            placeholder="Search Exercises"
            type={'text'}
          ></TextField>
          <Button className='search-btn'
            sx={{
              color: "#fff",
              bgcolor: "#ff2625",
              position: 'absolute',
              height: '56px',
              right: 0
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Stack>
    </div>
  )
}

export default SearchExercises
