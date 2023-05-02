import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import pic3 from '../../../assets/3.png'

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
};

export default EditorsInsights;