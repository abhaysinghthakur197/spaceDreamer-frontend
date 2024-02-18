
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import DefaultCardImg from '../../assets/Useraddnews_default.jpg'

const ArticleView = () => {

    const [imgError, setImgError] = useState(false);
    const location = useLocation();

    const article = location.state;

    const handleImgError = () => {
        setImgError(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container style={{ padding: '100px 0', marginTop: '60px' }}>
            <div className='w-100 h-100 d-flex align-items-center' >
                {article ? (
                    <div>
                        {article.coverImageURL && !imgError ? (
                            <img
                                src={article.coverImageURL}
                                alt='coverhead'
                                className='w-75'
                                onError={handleImgError}
                            />
                        ) : (
                            <img
                                src={DefaultCardImg}
                                alt='coverhead'
                                className='w-75'
                            />
                        )}
                        <h1 className='text-white mt-5 pt-5 px-4'>{article.title}</h1>
                        <p className='text-white mt-2 pt-5 px-4'>{article.body}</p>
                    </div>
                ) : (
                    <p> Loading </p>
                )}
            </div>
        </Container>
    );
};

export default ArticleView;
