import React from 'react';
import { Stack, Box } from '@mui/system';
import './samples.css';
import {Song1, Song2} from "./Songs";

function Samples() {
  return (
    <div className='all_samples'>
      <h1 className='our_samples' id="heartbeat">Samples</h1>
      <Stack direction="column" gap={6}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={7} >
          <Song1 />
          <Song2 />
          <Song2 />
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={7} >
          <Song1 />
          <Song2 />
          <Song2 />
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={7} >
          <Song1 />
          <Song2 />
          <Song2 />
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={7} >
          <Song1 />
          <Song2 />
          <Song2 />
        </Stack>
      </Stack>
    </div>
  )
}

export default Samples