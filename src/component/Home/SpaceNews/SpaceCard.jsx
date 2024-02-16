import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import moment from "moment";

import '../../../../src/index.css'
import './SpaceCard.css'


const SpaceCard = ({ news }) => {
    // console.log("NEWS", news);

    return (
        <Container className="py-5">

            <Row xs={1} md={2} lg={3}>
                {news.map((item, index) => (
                    <Col key={index} className="px-4 py-y mb-5 ml-2">
                        <Card style={{ width: "25rem"}} className="border-warning border-2 bg-dark" >
                            <Card.Img variant="top" src={item.imageUrl} alt={item.altText} className="p-1" style={{ borderRadius: '15px', height: '200px' }} />
                            <Card.Body>
                                <Card.Title className="text-white">{item.title}</Card.Title>
                                <Card.Text className="text-white">{moment(item.publishedAt).format("dddd, MMMM Do, YYYY")}</Card.Text>
                                <Card.Text className="card-description text-white">{truncateDescription(item.summary)}</Card.Text>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant='outline-light'>{item.newsSite}</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

const truncateDescription = (description) => {
    // Truncate the description to a fixed number of lines (e.g., 3 lines)
    const lines = description.split('\n').slice(0, 3);
    return lines.join('\n');
};

export default SpaceCard;