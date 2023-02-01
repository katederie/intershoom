import React from 'react';
import './home.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Stack } from "@mui/material";
import recording from "../../assets/recording.jpg";
import composition from "../../assets/composition.JPG";
import mixing from "../../assets/mixing.JPG";
import tutoring from "../../assets/tutoring.jpg";
import Contacts from '../../components/contacts/Contacts';
import About from '../../components/about/About';
import { Song1, Song2 } from '../samples/Songs';

const Home = () => {
  return (
    <>
    <Stack>
      <Box>
        <div className="back">
          <div className="tracking-in-contract">
            <p className="name">The Intershoom Studio</p>
          </div>
          <div className="tracking-in-expand-fwd">
            <p className="small_name">The Intershoom Studio</p>
          </div>
          <div className="text-blur-out">
            <p className="by_v">of Victor Zharov-Bulgakov</p>
          </div>
        </div>
      </Box>
      <Box>
        <div className="services_list">
          <header className='header_services'> 
              <a href="/services">Services</a> 
          </header>
          <div className="grid">
              <Stack className='card1' >
                  <p className='service_name'>Recording</p>
                  <img className='icon' src={recording} alt="recording"/>
                  <KeyboardDoubleArrowDownIcon  sx={{alignSelf: 'center', mb:"5px" }}/>
              </Stack>
              <Stack className='card2'>
                  <p className='service_name'>Composition</p>
                  <img className='icon' src={composition} alt="composition"/>
                  <KeyboardDoubleArrowDownIcon sx={{alignSelf: 'center', mb:"5px" }} />
              </Stack>
              <Stack className='card3'>
                  <p className='service_name'>Post-production</p>
                  <img className='icon' src={mixing} alt="mixing"/>
                  <KeyboardDoubleArrowDownIcon sx={{alignSelf: 'center', mb:"5px" }} />
              </Stack>
              <Stack className='card4'>
                  <p className='service_name'>Tutoring</p>
                  <img className='icon' src={tutoring} alt="tutoring"/>
                  <KeyboardDoubleArrowDownIcon sx={{alignSelf: 'center', mb:"5px"}} />
              </Stack>
          </div>
        </div>
      </Box>
    </Stack>
    <About />
    <Stack>
      <Box>
        <div>
        <header className='header_samples'> 
        <a href="/samples">Samples</a> 
        </header>
        <p className='samp_descr'>
          Here are the samples of our work
        </p>
        </div>
      </Box>
      <div className="samples_grid" >
        <Song1 />
        <Song2 />
        <Song1 />
        <Song2 />
      </div>
    </Stack>
    <Contacts />
    </>
  )
}

export default Home