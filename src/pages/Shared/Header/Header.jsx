import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {


    return (
        <Container>
            <div className="text-center mt-4">
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>

            <div className='d-flex'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            
        </Container>
    );
};

export default Header;