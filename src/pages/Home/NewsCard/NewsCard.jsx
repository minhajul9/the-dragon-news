import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, author, title, details, image_url } = news

    return (
        <Card className="mb-4">
            <Card.Header>
            <Image src={author.img} roundedCircle />
            </Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....<Link to={`/news/${_id}`}>Read More</Link></> }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    );
};

export default NewsCard;