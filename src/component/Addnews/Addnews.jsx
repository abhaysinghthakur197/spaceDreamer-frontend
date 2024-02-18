import React from 'react';
import {Row, Col } from 'react-bootstrap';

import Articleform from './Articleform/Articleform';

const Addnews = () => {
    return (
        <>
            <div>
                <div>
                    <Row>
                        <Col lg={8} xm={12}>
                            <img src={process.env.PUBLIC_URL + 'addArticleGif.gif'} alt='addnews'  className='img-fluid' width={2500} style={{ height: '100vh', objectFit: 'cover' }} />
                        </Col>
                        <Col lg={4} className='d-flex align-items-center justify-content-center' >
                            <h1 className='text-center text-white my-5'>Let'<span className='text-warning'>s</span>  Explore the <br></br><span style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651' }}>Cosmos World</span></h1>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <Articleform />
                </div>
            </div>
            <div className='py-3'>

            </div>
        </>
        // </Container >
    )
}

export default Addnews;
