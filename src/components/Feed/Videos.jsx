import { Stack, Box } from "@mui/material"
import ChannelCard from './ChannelCard'
import VideoCards from './VideoCards'

const Videos = ({ video , direction }) => {
  if(!video?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2} >

      {video.map((item, idx) => {
        return <>
            <Box key={idx}>
               {item.id.videoId && <VideoCards video={item}/>}
               {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        </>
      })}
    </Stack>
  )
}

export default Videos