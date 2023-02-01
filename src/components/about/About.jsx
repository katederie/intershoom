import React from 'react';
import './about.css';
import { Stack, Box } from '@mui/system';

const About = () => {
  return (
    <div className='about_us' id="about">
        <header className='header_about'>
            About Us
        </header>
        <Box className="rider">
            <h1 className='therider'>Технический райдер студии</h1>
            <br/>
            <h2>Рабочая станция</h2>
            <h3>
                Apple Mac Pro
                <br/> DAW: Cubase, Reaper 
                <br/><br/>
            </h3>
            <h2>Аппаратная</h2>
            <h3>
                2 линии мониторов: FOCAL SOLO6BE, Near 05 BY ESI
                <br/> 2х-канальный микрофонный предусилитель "TVORQIE" (сэлф-разработка)
                <br/> Аудиоинтерфейс: DIGIDESIGN 003 RACK+ FACTORY
                <br/> Мастеринговый процессор: TC ELECTRONIC FINALIZER
                <br/> Консоль: YAMAHA MG16/4
                <br/> Наушники: SONY MDR-7605, AUDIO-TECHNICA ATH-M20X, SEINHEISSER HD100 
                <br/> 4-х канальный усилитель для стереонаушников MICROAMP HA400
            </h3>
            <br/><br/>
            <h2>Инструменты</h2>
            <h3>
                Микрофоны: NEUMAN TLM193, SURE SM58, SUPERLUX R102
                <br/> Гитары: GIBSON FIREBIRD, FENDER SQUILER STRAT, FENDER ACOUSTIC CD-60
                <br/> MIDI-Контроллер: AKAI PRO MPK49
            </h3>
            <br/><br/>
            <h2>Дополнительно</h2>
            <h3>
                Гитарный комбо KUSTOM QUAD 100 DFX
                <br/> 12 гитарных эффектов разной направленности
                <br/> Изоляционный фильтр T.BONE MICSCREEN LE
            </h3>
        </Box>
    </div>
  )
}

export default About