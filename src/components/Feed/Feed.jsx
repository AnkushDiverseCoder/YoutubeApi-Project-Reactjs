import { useEffect, useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

const Feed = () => {
  
  const [SelectedCategory, SetSelectedCategory] = useState('New')
  const [video, setVideo] = useState([])
  useEffect(() =>{
       fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`)
       .then((data) => setVideo(data.items))
  },[SelectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { sm: 'coloumn', md: "row" },
      }}
    >

      {/******************************* SIDEBAR COMPONENT   ********************************/}
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        
        <Sidebar SelectedCategory={SelectedCategory} SetSelectedCategory={SetSelectedCategory}/>

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 Ankush Singh
        </Typography>
      </Box>

      {/*******************************   VIDEOS COMPONENT   ********************************/}
      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2  }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} >
          {SelectedCategory} <span style={{
            color: '#F31503',
          }} >
            Videos
          </span>
        </Typography>

        <Videos video={video}/>
      </Box>
    </Stack>
  )
}

export default Feed