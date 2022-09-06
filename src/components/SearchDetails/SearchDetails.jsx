
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from '../Feed/Videos'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchDetails = () => {
  const {searchTerm} = useParams();

  const [video, setVideo] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideo(data.items))
  }, [searchTerm])

  return (
    <>
      {/*******************************   VIDEOS COMPONENT   ********************************/}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2,  }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'  }} >
          Search Results For: <span style={{
            color: '#F31503',
          }} >
            {searchTerm}
          </span>
          Videos
        </Typography>

        <Videos video={video} />
      </Box>
    </>
  )
}

export default SearchDetails