import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
    }

    return (
        <Container >
            {/* navbar */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }


                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Log Out</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;