import React from 'react'
import { Card , Row , Col } from 'react-bootstrap'
import scholarshipImage from '../../../../client/src/images/scholarship.jpg'

const Home = () => {
  return (
    <>
    <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1" data-aos="fade-up" data-aos-duration="800">
              <h1 className="main-heading">
                Welcome to <span>Scholarship</span>
                <br />
              </h1>
              <p className="info-text">Empowering the next Generation</p>
              <div className="btn_wrapper">
                <a href='/scholarships'>
                <button
                  className="btn view_more_btn"
                  style={{
                    backgroundColor: "#335eea",
                    color: "#fff",
                    width: "200px",
                  }}
                >
                  view Scholarships
                  <i className="ri-arrow-right-line" />
                </button></a>
              </div>
            </div>
            <div className="grid-item-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="team_img_wrapper">
                <img src={scholarshipImage} alt="Scholarship"/>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    
    </>
  )
}

export default Home