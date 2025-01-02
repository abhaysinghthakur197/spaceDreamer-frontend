import React, {useRef}from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
// import UseraddNews from './Useraddnews/UseraddNews'
import News from './SpaceNews/News'
import { useAuth } from '../auth/AuthContext';


const Welcome = () => {

    const { username } = useAuth();
    // console.log("username", username)

    const newsRef = useRef(null);

    const handleFindNewsClick = () => {
        newsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='welcome text-light mt-5' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundImage4.gif)`}}>
            <Container className='py-5 vh-90 vh-md-75 vh-lg-50'>
                <Row className='my-5 align-items-center'>
                    <Col md={6} className=' my-5 py-5text-center'>
                        <div className="text-container">
                            <h1 className='display-0 font-weight-bold'>Welcome...</h1>
                            <h3 className='text-warning'>{username}</h3>
                            <p>Welcome to space dreamer, It is a website for the space lover in the world. Get all the latest news of space and cosmos world right HERE! </p>
                            <Button variant='outline-light' className='mx-1 my-1' onClick={handleFindNewsClick}>Find the NEWS</Button>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="image-container">
                            <img src={process.env.PUBLIC_URL + "/welcomeImg.gif"} alt='coverhead' className='img-fluid' width={400} height={400} />
                        </div>
                    </Col>
                </Row>
            </Container>

{/*             <div>
                <UseraddNews />
            </div> */}

            <div className='py-5' ref={newsRef} >
                <News />
            </div>
        </div>
    )
}

export default Welcome;
