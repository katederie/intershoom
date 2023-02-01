import React from 'react';
import { Typography, Stack } from '@mui/material';
import "./footer.css";
import { SlSocialVkontakte } from 'react-icons/sl';
import {TbBrandTelegram} from 'react-icons/tb';
import { AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai';


const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <Stack className='footer'>
        <Stack className="social" direction="row" spacing={5} m={2} p={1}>
            <SlSocialVkontakte color="#d0a86a" size={32} />
            <TbBrandTelegram color="#d0a86a" size={32} />
            <AiOutlineInstagram color="#d0a86a" size={32} />
            <AiOutlineMail color="#d0a86a" size={32} />
        </Stack>
        <Stack direction="row" paddingBottom="1rem" className='foot'>
            <p className='copyright'>
                {`© The Shoom Production ${year}`}
            </p>
            <p className='copyright'>
                Created by Aikaterini
            </p>
        </Stack>
    </Stack>
  )
}

export default Footer