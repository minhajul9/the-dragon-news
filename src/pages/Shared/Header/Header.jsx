import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user } = useContext(AuthContext)

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

            {/* navbar */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link >
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary">Log Out</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;