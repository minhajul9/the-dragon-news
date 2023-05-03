import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const goTo = location.state?.from.pathname
    // console.log(goTo);

    const navigate = useNavigate()

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            navigate(goTo || '/category')
        })
        .catch(error => console.log(error))

    }

    return (
        <Form onSubmit={handleLogin} className='w-25 mx-auto'>
            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group controlId="rememberMe">
                <Form.Check
                    type="checkbox"
                    label="Remember me"
                    onChange={() => { }}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log in
            </Button>

            <p className="mt-3">
                Don't have an account?{' '}
                <Link to="/register">Register here</Link>
            </p>
        </Form>
    );
};

export default Login;