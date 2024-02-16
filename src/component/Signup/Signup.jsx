import React from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useFormik } from 'formik'

import { signUpSchema } from '../schemas/SignupSchema';

const Login = () => {

    // Style
    const sectionStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/SignupGif.gif)`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Set text color to be readable against the background
        padding: '100px 0', // Adjust padding as needed
    };

    // const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'

    const navigate = useNavigate();

    const formData = {
        username: '',
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: formData,
        validationSchema: signUpSchema,
        onSubmit: async (values, action) => {
            // console.log("form values", values);
            try {
                const response = await axios.post('http://localhost:8000/api/user/signup', values)
                console.log("response", response); 
                if(response.status === 200){
                    alert("Congrats! You are now a *Space Dreamer*")
                    navigate('/Signin')
                }
            } catch (error) {
                alert("Error while sign up")
                // console.error('Error during signup:', error);
            }
            action.resetForm();
        },
    });

    return (
        <Container style={sectionStyle}>
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <Card style={{ width: '38rem'}} bg="black" className='border-warning border-3 bg-dark'>
                    <Card.Body>
                        <Card.Title className='text-center text-white text-decoration-underline' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651', fontSize: '2.6rem' }}>Sign <span className='text-warning'>Up</span></Card.Title>
                        <p className='text-white text-center'>Let's began the SPACE Journey</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername" className='my-4' >
                                <Form.Label className='text-white'>Username:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    name="username"
                                    className="form-control bg-secondary"
                                    // id="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.username && errors.username ? (
                                    <p className="form-error text-danger">{errors.username}</p>
                                ) : null}

                            </Form.Group>
                            <Form.Group controlId="formEmail" className='my-4'>
                                <Form.Label className='text-white'>Email:</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    className="form-control bg-secondary"
                                    // id="eamil"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.email && errors.email ? (
                                    <p className="form-error text-danger">{errors.email}</p>
                                ) : null}
                            </Form.Group>
                            <Form.Group controlId="formPassword" className='my-4'>
                                <Form.Label className='text-white'>Password:</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    // id="password"
                                    className="form-control bg-secondary"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.password && errors.password ? (
                                    <p className="form-error text-danger">{errors.password}</p>
                                ) : null}
                            </Form.Group>
                            <div className=' d-flex align-items-center justify-content-center '>

                                <Button variant="outline-light" type="submit">
                                    Sign up
                                </Button>
                            </div>
                            <p className='text-white text-center mt-3'>Already a Space Dreamer ?
                            <Link variant="outline-light" type="cancel" className='px-2 text-warning' as={Link} to="/Signin">
                            Log In
                            </Link>
                            </p>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Login
