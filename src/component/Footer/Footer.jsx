import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 " name="contact">
      <Container>
        <Row>
          <Col md={6} xs={6}>
            <p>&copy; 2024 Your Company</p>

            <h4>Contact Us</h4>
            <p>
              Address: Pune<br />
              Phone: (555) 123-4567<br />
              Email: info@example.com
            </p>
          </Col>
          <Col md={6} xs={6} className="text-right">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon mx-2" style={{ fontSize: '1.5em', color: 'yellow' }} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon mx-2"  style={{ fontSize: '1.5em',color: 'yellow' }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon mx-2" style={{ fontSize: '1.5em',color: 'yellow' }} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon mx-2"  style={{ fontSize: '1.5em',color: 'yellow' }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
