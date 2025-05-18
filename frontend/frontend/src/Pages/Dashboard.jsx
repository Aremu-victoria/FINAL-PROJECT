import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { FaDownload, FaEye, FaBell, FaUpload, FaHome, FaUser, FaSignOutAlt, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashBoardFooter from '../Components/DashBoardFooter';

const DashboardPage = () => {
  const uploadedMaterials = [
    { title: "Algebra - Chapter 3", subject: "Math - Algebra Notes", uploader: "Ms. Smith", date: "14 May 2025" },
    { title: "Physics - Motion", subject: "Science - Lab Report", uploader: "Mr. Lee", date: "13 May 2025" },
    { title: "World Wars Overview", subject: "History - Timeline", uploader: "Mr. Patel", date: "12 May 2025" },
    { title: "Essay Writing Tips", subject: "English - Essay Guide", uploader: "Ms. Johnson", date: "10 May 2025" },
  ];

  return (
    <Container fluid>
      <Row className="min-vh-100">
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3">
          <h5 className="mb-4"> <FaHome className="me-2" />Learn Link</h5>
            <Nav className="flex-column gap-3">
                    <Link to='/dashboard' className='text-white' style={{textDecoration:'none'}}><FaHome className="me-2" />Dashboard</Link>
                      <Link to='/uploadMaterial' className='text-white' style={{textDecoration:'none'}}><FaUpload className="me-2" />Upload Materials</Link> 
                      <Link to='/viewMaterial' className='text-white' style={{textDecoration:'none'}}> <FaFolderOpen className="me-2" />View Materials</Link>
                      <Link to='/profile' className='text-white' style={{textDecoration:'none'}}> <FaUser className="me-2" />My Profile</Link>
                      <Link to='/notification' className='text-white' style={{textDecoration:'none'}}><FaBell className="me-2" />Notifications</Link>
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
            <h5>Dashboard Overview</h5>
            <p>Manage and explore your educational materials</p>

            {/* Stats Cards */}
            <Row className="mb-4">
              {[
                { title: "Materials Uploaded", value: 25 },
                { title: "New This Week", value: 5 },
                { title: "Total Downloads", value: 87 },
                { title: "Active Students", value: 12 },
              ].map((stat, idx) => (
                <Col key={idx} md={3} sm={6} xs={12} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-muted" style={{ fontSize: '14px' }}>{stat.title}</Card.Title>
                      <h3>{stat.value}</h3>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Upload Button */}
            <div className="text-end mb-3">
              <Button variant="dark"><FaUpload className="me-1" /> Upload Material</Button>
            </div>

            {/* Recently Uploaded */}
            <h6>Recently Uploaded Materials</h6>
            <Row>
              {uploadedMaterials.map((material, idx) => (
                <Col md={3} sm={6} xs={12} key={idx} className="mb-3">
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title className="bg-dark text-white p-2 rounded">{material.subject}</Card.Title>
                      <Card.Text className="mt-2">{material.title}</Card.Text>
                      <Card.Text className="text-muted" style={{ fontSize: '12px' }}>
                        Uploaded by {material.uploader} - {material.date}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <Button variant="dark" size="sm"><FaDownload /> Download</Button>
                      <Button variant="outline-dark" size="sm"><FaEye /> View</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Footer */}
          <DashBoardFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
