import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa'
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {

    const news = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { title, details, image_url, category_id } = news

    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaLongArrowAltLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;