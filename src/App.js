import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

//////////////////////////////// COMPONENTS  //////////////////////////////////
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchDetails } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        {/******************************************** NAVBAR ************************************/}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetails />}></Route>
          <Route path="/channel/:id" element={<ChannelDetails />}></Route>
          <Route path="/search/:searchTerm" element={<SearchDetails />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
