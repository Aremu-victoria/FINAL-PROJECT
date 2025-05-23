import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { FaBell, FaUpload, FaHome, FaUser, FaSignOutAlt, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashBoardFooter from '../Components/DashBoardFooter';

const UploadMaterials = () => {
    return (
    <Container fluid>
      <Row className="min-vh-100">
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3">
          <h5 className="mb-4"> <FaHome className="me-2" />Learn Link</h5>
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
            <h5>Upload Materials</h5>

            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                  <div className="card shadow-sm">
                    <div className="card-header text-white" style={{ backgroundColor: '#212529' }}>
                      <h4 className="mb-0">Upload New Material</h4>
                      <p className="mb-0">Fill out the details and upload your educational material below.</p>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label fw-bold">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter material title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                          <select
                            className="form-select"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select subject</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                            <option value="Language">Language</option>
                            <option value="Arts">Arts</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="description" className="form-label fw-bold">Description</label>
                          <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            placeholder="Brief description of the material"
                            value={formData.description}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="file" className="form-label fw-bold">Upload File</label>
                          <div className="input-group">
                            <input
                              type="file"
                              className="form-control"
                              id="file"
                              name="file"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-text">
                            Accepted: PDF, DOCX, Images
                          </div>
                        </div>

                        <div className="d-grid">
                          <button type="submit" className="btn text-light btn-lg" style={{ backgroundColor: '#212529' }}>
                            Upload Material
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <DashBoardFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default UploadMaterials;
