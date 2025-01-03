import { useState } from "react";
import { Card, Row, Col, Carousel, Button } from 'react-bootstrap'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import DefaultCardImg from '../../../assets/Useraddnews_default.jpg'

const ArticleCard = ({ allArticle }) => {


    const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'
    const [imgError, setImgError] = useState(false);
    const navigate = useNavigate();

    const handleImgError = () => {
        setImgError(true)
    }

    const handleView = async (_id) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/article/${_id}`);
            const specificArticle = response.data.getArticle;
            navigate(`/article/${_id}`, { state: specificArticle });
        } catch (err) {
            alert("Error in loading the page")
            
        }
    }

    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <Carousel controls={false}>
                {allArticle.map((item) => (
                    <Carousel.Item key={item._id}>
                        <Row className="g-0" xs={1} md={2} lg={3}>
                            <Col>
                                <Card style={{ width: "25rem" }} className='border-warning border-3 bg-dark w-100'>
                                    {item.coverImageURL && !imgError ? (
                                        <Card.Img
                                            src={item.coverImageURL}
                                            alt="cardhead"
                                            className='p-1'
                                            style={{ borderRadius: '15px' }}
                                            onError={handleImgError}
                                        />
                                    ) : (
                                        <Card.Img
                                            src={DefaultCardImg}
                                            alt="cardhead"
                                            className='p-1'
                                            style={{ borderRadius: '15px' }}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title className="font-weight-bold text-white" style={{ fontSize: '24px' }}>
                                            {item.title}
                                        </Card.Title>
                                        <p className="text-white py-1">Last updated: {moment(item.updateDate).format('MMMM Do YYYY')}</p>
                                        <Card.Text className="text-white py-1">
                                            {item.body.slice(0, item.body.indexOf('.') + 1)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <div className="d-inline-block">
                                            <Button variant='outline-light' className='mx-1 my-1' onClick={() => handleView(item._id)}>View</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>

                            {/* <Card style={{ width: "25rem" }} className='border-warning border-3 bg-dark'>
                                    {item.coverImageURL && !imgError ? (
                                        <Card.Img
                                            src={item.coverImageURL}
                                            alt="Article"
                                            className='p-1'
                                            style={{ borderRadius: '15px' }}
                                            onError={handleImgError}
                                        />
                                    ) : (
                                        <Card.Img
                                            src={DefaultCardImg}
                                            alt="Default"
                                            className='p-1'
                                            style={{ borderRadius: '15px' }}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title className="font-weight-bold text-white" style={{ fontSize: '24px' }}>
                                            {item.title}
                                        </Card.Title>
                                        <p className="text-white py-1">Last updated: {moment(item.updateDate).format('MMMM Do YYYY')}</p>
                                        <Card.Text className="text-white py-1">
                                            {item.body.slice(0, item.body.indexOf('.') + 1)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <div className="d-inline-block">
                                            <Button variant='outline-light' className='mx-1 my-1' onClick={() => handleView(item._id)}>View</Button>
                                        </div>
                                    </Card.Footer>
                                </Card> */}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div >
    )
}

export default ArticleCard;
