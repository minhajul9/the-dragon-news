import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => console.log(error))
    }

    const handleChecked = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleRegister} className='w-25 mx-auto'>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="photoUrl">
                <Form.Label>Photo URL:</Form.Label>
                <Form.Control type="text" placeholder="Enter your photo URL" />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group  controlId="rememberMe">
                <Form.Check
                    onClick={handleChecked}
                    type="checkbox"
                    label={<>Agree  <Link to='/terms'>Terms and Conditions</Link></>}
                    name='accept'
                />
            </Form.Group>

            <Button disabled={!accepted} variant="primary" type="submit">
                Submit
            </Button>

            <p className="mt-3">
                Already have an account?{' '}
                <Link to="/login">Log in here</Link>
            </p>
        </Form>
    );
};

export default Register;