import React from 'react';
import './contacts.css';
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';
import MainLogo from '../../assets/MainLogo.png';
import {BiMap} from 'react-icons/bi';
import {AiOutlinePhone} from 'react-icons/ai';
import { Stack } from '@mui/system';


const Contacts = () => (
    <div id="contacts">
        <header className='header_contacts'>
            <a href="#contacts">Contacts</a>
        </header>
        <Stack className="contact_details" direction="column" justifyContent="center" alignContent="center" m="auto">
            <Stack direction="row" spacing={0.1}>
                <AiOutlinePhone color="#d0a86a" size={30} />
                <p className='address'>
                    +7 964 700 93 32
                </p>
            </Stack>
            <Stack direction="row" spacing={0.1}>
                <BiMap color="#d0a86a" size={30} />
                <p className='address'>
                    улица Осташковская,14с2, Москва
                </p>
            </Stack>
        </Stack>
        <YMaps>
            <div className='maps'>
                <Map
                    defaultState={{
                        center: [55.881915, 37.678333], zoom: 13
                    }}
                    // modules={["control.ZoomControl", "control.GeolocationControl"]}
                    width={'100%'}
                    height={'18rem'}>
                    <ZoomControl options={{ size: "large", position:"auto"}} />
                    <Placemark
                        geometry={[55.881915, 37.678333]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: MainLogo,
                            iconImageSize: [36, 36],
                            iconImageOffset: [-3, -22],
                        }} />
                </Map>
            </div>
        </YMaps>
    </div>
)

export default Contacts