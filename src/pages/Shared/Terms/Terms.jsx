import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h4>Terms and Conditions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore sequi unde, incidunt accusamus omnis fuga expedita voluptatum reiciendis. Quod incidunt quas excepturi dignissimos odio doloremque ab fuga, voluptatem quasi.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;