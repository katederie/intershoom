import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import './songs.css';


export function Song1() {
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(0);
    const [paused, setPaused] = React.useState(true);
    function formatDuration(value) {
      const minute = Math.floor(value / 60);
      const secondLeft = value - minute * 60;
      return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return (
    <Stack className='stack'>
        <Typography color="black" fontWeight={800} fontSize="12px" padding={0.5}>
            Song 1
        </Typography>
          <Slider
            className='slider'
            aria-label="time-indicator"
            size="small"
            position="relative"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: "black",
              height: 3,
            }}
          />
          <Box
            sx={{
              display:"flex",
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -1,
            }} >
            <Typography 
            sx={{fontSize: '0.75rem',
            padding: 0.1,
            opacity: 0.6,
            fontWeight: 500,
            letterSpacing: 0.2,
            color: "black"}}>{formatDuration(position)}</Typography>
            <Typography sx={{fontSize: '0.75rem',
            opacity: 0.6,
            padding: 0.1,
            fontWeight: 500,
            letterSpacing: 0.2,
            color: "black"}}>-{formatDuration(duration - position)}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: '2rem' }}
                  htmlColor="black"
                />
              ) : (
                <PauseRounded sx={{ fontSize: '2rem' }} htmlColor="black" />
              )}
            </IconButton>
          </Box>
    </Stack>
    );
  }
  


  export function Song2() {
    const duration = 60; // seconds
    const [position, setPosition] = React.useState(0);
    const [paused, setPaused] = React.useState(true);
    function formatDuration(value) {
      const minute = Math.floor(value / 60);
      const secondLeft = value - minute * 60;
      return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return (
    <Stack className='stack'>
        <Typography color="black" fontWeight={800} fontSize="12px" padding={0.5}>
            Song 2
        </Typography>
          <Slider
            className='slider'
            aria-label="time-indicator"
            size="small"
            position="relative"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: "black",
              height: 3,
            }}
          />
          <Box
            sx={{
              display:"flex",
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -1,
            }} >
            <Typography 
            sx={{fontSize: '0.75rem',
            padding: 0.1,
            opacity: 0.6,
            fontWeight: 500,
            letterSpacing: 0.2,
            color: "black"}}>{formatDuration(position)}</Typography>
            <Typography sx={{fontSize: '0.75rem',
            opacity: 0.6,
            padding: 0.1,
            fontWeight: 500,
            letterSpacing: 0.2,
            color: "black"}}>-{formatDuration(duration - position)}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: '2rem' }}
                  htmlColor="black"
                />
              ) : (
                <PauseRounded sx={{ fontSize: '2rem' }} htmlColor="black" />
              )}
            </IconButton>
          </Box>
    </Stack>
    );
  }
  