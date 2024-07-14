import React, { useState, useEffect } from "react";
import { Container, Col, Button, Modal, Row, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentDetails = () => {
  const navigate = useNavigate();
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [reasons, setReasons] = useState([]);
  const [finalReason, setFinalReason] = useState("");

  // Get function
  const getScholarships = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/get-applications`);
      setScholarships(data.application);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getScholarships();
  }, []);

  const handleAccept = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/set-status/${selectedScholarship._id}`,
        { status: "Accepted" }
      );
      alert(data.message);
      navigate("/adminDashboard");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleReject = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/set-status/${selectedScholarship._id}`,
        { status: "Rejected", reason: finalReason }
      );
      alert(data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleDetailButtonClick = (index) => {
    setSelectedScholarship(scholarships[index]);
    setShowDetailModal(true);
  };

  const handleRejectButtonClick = () => {
    setShowRejectModal(true);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (reasons.includes(value)) {
      setReasons(reasons.filter((reason) => reason !== value));
    } else {
      setReasons([...reasons, value]);
    }
  };

  const handleTextAreaChange = (e) => {
    setFinalReason(e.target.value);
  };

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Scholarship Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {scholarships?.map((item, index) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.scholarshipName}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>
                <Button onClick={() => handleDetailButtonClick(index)}>
                  View More
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedScholarship?.scholarshipName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={2} className="modal-label">
                Student Name:
              </Col>
              <Col sm={3}>{selectedScholarship?.name}</Col>
              <Col sm={1} className="modal-label">
                Email:
              </Col>
              <Col sm={3}>{selectedScholarship?.email}</Col>
              <Col sm={1} className="modal-label">
                Mobile:
              </Col>
              <Col sm={2}>{selectedScholarship?.mobile}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={2} className="modal-label">
                Amount:
              </Col>
              <Col sm={3}>{selectedScholarship?.amount}</Col>
              <Col sm={1} className="modal-label">
                Category:
              </Col>
              <Col sm={3}>{selectedScholarship?.category}</Col>
            </Row>
            <br />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="danger" onClick={handleReject}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showRejectModal}
        onHide={() => setShowRejectModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedScholarship?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reason: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Reason for rejecting this application"
                autoFocus
                onChange={handleTextAreaChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select reason for rejection:</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  id="checkbox1"
                  label="Reason 1"
                  value="Reason 1"
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  id="checkbox2"
                  label="Reason 2"
                  value="Reason 2"
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  id="checkbox3"
                  label="Reason 3"
                  value="Reason 3"
                  onChange={handleCheckboxChange}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRejectModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleReject}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default StudentDetails;
