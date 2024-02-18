import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { articleSchema } from '../../schemas/AddarticleSchema'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// formik
import { useFormik } from 'formik';

const Articleform = () => {

    const navigate = useNavigate();
<<<<<<< HEAD
    const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'
=======

    const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'

>>>>>>> 6c1b56e87a573ee762319717a019b482544cab17

    const formData = {
        coverImage: null,
        title: '',
        body: '',
    }

    const onSubmit = async (values, action) => {
        // console.log("Values file", values);

        try {
            const formData = new FormData();
            formData.append('coverImage', values.coverImage);
            formData.append('title', values.title);
            formData.append('body', values.body);

            const response = await axios.post(`${BACKEND_URL}/api/article/addnews`, formData, {
                withcredentials: true
            },);
            // console.log("response from server", response);
            if (response.status === 200) {
                alert("Article is uploaded succesfully");
                navigate('/')
            }

        } catch (error) {
            console.log("error during login", error);
        }
        action.resetForm();
    }

    const handleCancel = () => {
        console.log("inside the cancel")
        navigate('/')
    }

    const formik = useFormik({
        initialValues: formData,
        validationSchema: articleSchema,
        onSubmit
    })

    const handleFileChange = (e) => {
        const fileInput = e.target;
        const file = fileInput.files.length > 0 ? fileInput.files[0] : null;

        formik.setFieldValue('coverImage', file);
    };


    return (
        <Card  className='border-warning border-3 bg-dark w-75 w-md-auto' style={{ maxWidth: '38rem' }} bg="dark">
            <Card.Body>
                <Card.Title className='text-center text-white' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651' }}>Add Article</Card.Title>
                <Form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                    <Form.Group controlId="formFile" className='my-4' >
                        <Form.Label className='text-white'>Image</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            placeholder="Enter image "
                            name="coverImage"
                            className="form-control"
                            onChange={handleFileChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.file && formik.errors.file ? (
                            <p className="form-error text-danger">{formik.errors.file}</p>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="formTitle" className='my-4'>
                        <Form.Label className='text-white'>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            className="form-control"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <p className="form-error text-danger">{formik.errors.title}</p>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="formBody" className='my-4'>
                        <Form.Label className='text-white'>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            name="body"
                            className="form-control"
                            value={formik.values.body}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.body && formik.errors.body ? (
                            <p className="form-error text-danger">{formik.errors.body}</p>
                        ) : null}
                    </Form.Group>
                    <div className='d-flex  align-items-center justify-content-center '>
                        <Button variant="outline-light" type="submit" className='mx-3'>
                            Submit
                        </Button>
                        <Button variant="outline-light" type='reset' onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Articleform
