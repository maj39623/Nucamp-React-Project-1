import React, { useState } from 'react';
import Popup from '../Modal/modal';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const togglePopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            {/* navbar is toggleble */}
            <Navbar toggle={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
            <Popup isOpen={isOpenPopup} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Your Dream Car Awaits</HeroH1>
                    <HeroP>With a Click of a Button</HeroP>
                    <HeroBtn onClick={togglePopup}>Reserve Your Ride</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
};

export default Hero;
