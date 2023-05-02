import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='my-2 w-full' variant="outline-secondary"> <FaGoogle /> Login with Google</Button>
            <Button className='my-2 ' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;