import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';


// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, author, title, details, image_url, rating, total_view } = news

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p className='mb-0'><small>{moment(author.published_date).format('YYYY-MM-DD')}</small> </p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>

                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning'/>}
                        fullSymbol={<FaStar />}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>

    );
};

export default NewsCard;