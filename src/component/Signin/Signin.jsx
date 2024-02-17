import { useFormik } from 'formik';
import React from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../schemas/LoginSchema'
import axios from 'axios';

import { useAuth } from '../auth/AuthContext';

const Login = () => {

    // Style
    const sectionStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/SignupGif.gif)`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '100px 0', 
    };
   

    const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'

    const { login } = useAuth();

    const navigate = useNavigate();

    const formData = {
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: formData,
        validationSchema: loginSchema,
        onSubmit: async (values,action) => {
            // console.log("Login values", values);
            try {
                const response  = await axios.post(`${BACKEND_URL}/api/user/signin`, values, { withCredentials: true });
                if(response.status === 200){
                    login(response.data.user.username);
                    alert(`Your login successful!!! ${response.data.user.username}`);
                    navigate("/")
                }
            } catch (error) {
                alert("Invalid email or password!, Please try again")   
                console.log("error during login",error);
            }
            action.resetForm();
        }
    })
    return (
        <Container style={sectionStyle}>
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <Card style={{ width: '38rem' }} bg="black" className='border-warning border-3 bg-dark'>
                    <Card.Body>
                        <Card.Title className='text-center text-white text-decoration-underline' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651', fontSize: '2.6rem' }}>Log <span className='text-warning'>In</span></Card.Title>
                        <p className='text-center text-white'>Log In to feel the zero gravity!!!</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className='my-4'>
                                <Form.Label className='text-white'>Email:</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    className="form-control bg-secondary"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
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
                                    className="form-control bg-secondary"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password ? (
                                    <p className="form-error text-danger">{errors.password}</p>
                                ) : null}
                            </Form.Group>
                            <div className='d-flex  align-items-center justify-content-center '>
                                <Button variant="outline-light" type="submit" className='mx-3'>
                                    Log In
                                </Button>
                            </div>
                            <p className='text-white text-center mt-3'> Not a space member ?
                                <Link variant="outline-light" type="cancel" className='px-2 text-warning' as={Link} to="/Signup">
                                    Sign up
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
