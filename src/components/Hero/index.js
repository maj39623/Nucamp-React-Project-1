import React, { useState } from 'react';
import Popup from '../Modal/modal';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            {/* navbar is toggleble */}
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Popup isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Your Dream Car Awaits</HeroH1>
                    <HeroP>With a Click of a Button</HeroP>
                    <HeroBtn onClick={toggle}>Reserve Your Ride</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
};

export default Hero;
