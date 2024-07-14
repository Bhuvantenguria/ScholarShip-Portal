import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScholarshipTypes = () => {
  return (
    <>
      <section id="services">
        <div className="container service-section">
          <br />
          <Row>
            <Col className="grid-col-item" data-aos="fade-up" data-aos-duration="1000">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Merit Based Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore ratione facilis animi voluptas exercitationem
                      molestiae.
                    </p>
                    <Link to="/merit-based-scholarships">
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="grid-col-item" data-aos="fade-up" data-aos-duration="1000">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Minority Scholarship</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore ratione facilis animi voluptas exercitationem
                      molestiae.
                    </p>
                    <Link to="/minority-based-scholarships">
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="grid-col-item" data-aos="fade-up" data-aos-duration="1000">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>All Scholarships</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nostrum voluptate totam ipsa corrupti vero!
                      dhhdbhdbh bhdcsb hbh cbvhg
                    </p>
                    <Link to="/view-scholarships">
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
