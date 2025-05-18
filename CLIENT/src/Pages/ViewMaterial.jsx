import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Nav,Form  } from 'react-bootstrap';
import { FaBell, FaUpload, FaHome, FaUser, FaSignOutAlt, FaFolderOpen, FaEye, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashBoardFooter from '../Components/DashBoardFooter';


const materials = [
  {
    title: "Algebra - Chapter 3",
    subject: "Math",
    format: "PDF",
    description: "Key concepts of quadratic equations, solved examples, and practice exercises.",
    uploadedBy: "Mr. Smith",
    date: "14 May 2025",
  },
  {
    title: "Essay Writing Guide",
    subject: "English",
    format: "DOCX",
    description: "Step-by-step instructions with examples and common mistakes.",
    uploadedBy: "Ms. Lee",
    date: "10 May 2025",
  },
  {
    title: "Photosynthesis Explained",
    subject: "Science",
    format: "Video",
    description: "A short video explaining the process of photosynthesis.",
    uploadedBy: "Dr. Green",
    date: "7 May 2025",
  },
];
const ViewMaterial = () => {
    
    return (
        <Container fluid>
            <Row className="min-vh-100">
                {/* Sidebar */}
                <Col md={2} className="bg-dark text-white p-3">
                    <h5 className="mb-4"> <FaHome className="me-2" />School System</h5>
                    <Nav className="flex-column gap-3">
                        <Link to='/dashboard' className='text-white' style={{ textDecoration: 'none' }}><FaHome className="me-2" />Dashboard</Link>
                        <Link to='/uploadMaterial' className='text-white' style={{ textDecoration: 'none' }}><FaUpload className="me-2" />Upload Materials</Link>
                        <Link to='/viewMaterial' className='text-white' style={{ textDecoration: 'none' }}> <FaFolderOpen className="me-2" />View Materials</Link>
                        <Link to='/profile' className='text-white' style={{ textDecoration: 'none' }}> <FaUser className="me-2" />My Profile</Link>
                        <Link to='/notification' className='text-white' style={{ textDecoration: 'none' }}><FaBell className="me-2" />Notifications</Link>
                        <Nav.Link className="text-white"><FaSignOutAlt className="me-2" />Logout</Nav.Link>
                    </Nav>
                </Col>

                {/* Main Dashboard */}
                <Col md={10} className="bg-light">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
                        <div>
                            <strong>Welcome back, Alex Kim!</strong>
                        </div>
                        <div>
                            <FaBell className="me-2" />
                            <span className="badge bg-secondary">Role: Teacher</span>
                        </div>
                    </div>

                    <div className="px-4 py-3">
                        <h5>View Materials</h5>

                        <div className="container py-4">
      <Row className="mb-3 g-2">
        <Col md={3}><Form.Control placeholder="Search by title" /></Col>
        <Col md={3}>
          <Form.Select>
            <option>All Subjects</option>
            <option>Math</option>
            <option>English</option>
            <option>Science</option>
          </Form.Select>
        </Col>
        <Col md={3}><Form.Control placeholder="Uploader name" /></Col>
        <Col md={3}><Form.Control placeholder="mm/dd/yyyy" /></Col>
      </Row>

      <Row className="g-4">
        {materials.map((item, idx) => (
          <Col md={4} sm={6} xs={12} key={idx}>
            <Card className="p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-secondary">{item.format}</span>
                <span className="badge bg-light text-dark">{item.subject}</span>
              </div>
              <h6>{item.title}</h6>
              <p className="small">{item.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small>
                  <strong>{item.uploadedBy}</strong> <br /> {item.date}
                </small>
                <div className="d-flex gap-2">
                  <Button size="sm" variant="dark"><FaEye /></Button>
                  <Button size="sm" variant="outline-dark"><FaDownload /></Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="light">Load More</Button>
      </div>
    </div>
                    </div>

                    {/* Footer */}
                    <DashBoardFooter />
                </Col>
            </Row>
        </Container>
    );
};

export default ViewMaterial;
