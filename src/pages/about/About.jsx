import React from "react";
import { FaLinkedinIn, FaYoutube, FaCheckCircle } from "react-icons/fa";
import "../../assets/css/about/About.css";

const About = () => {
  return (
    <div className="about-page-ivory">
      <section className="about-details-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="about-sub-heading">OUR FOUNDER</p>
              <h2 className="about-name-ivory">Deepak M.</h2>
              <p className="about-credentials-ivory">
                CA, CSOE, CISA, GRC Expert
              </p>

              <ul className="about-list-ivory list-unstyled mt-4">
                <li>
                  <FaCheckCircle className="check-icon" />
                  <span>
                    A passionate professional who successfully pivoted after a
                    19-year career in governance, risk, and internal audit, now
                    dedicated to helping others learn and grow.
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <span>
                    Nearly two decades of experience in Internal Audit, GRC, and
                    IT Audit with leading conglomerates and tech companies in
                    E-Commerce and Fin-tech.
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <span>
                    Expertise in drafting and presenting findings effectively,
                    backed by deep practical knowledge.
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <span>
                    Proven leadership in handling teams of 30-40 for complex
                    assignments including SOX, ITGC, process audits, and
                    investigations.
                  </span>
                </li>
              </ul>
              <div className="about-social-icons-ivory mt-4">
                <a href="#" className="social-icon-about-ivory me-2">
                  <FaYoutube />
                </a>
                <a href="#" className="social-icon-about-ivory">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <img
                src="./assets/images/about/aboutus.png"
                className="about-profile-image shadow-lg"
                alt="Deepak M."
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="team-section-ivory">
        <div className="container">
          <h2 className="team-section-title-ivory">Meet Our Core Team</h2>
          <div className="title-underline-ivory"></div>

          <div className="row justify-content-center g-4 mt-5">
            <div className="col-md-6 col-lg-5">
              <div className="team-card-ivory">
                <img
                  src="https://i.imgur.com/3fMOf3g.png"
                  alt="Monika Shanbhag"
                  className="team-img-ivory"
                />
                <h4 className="team-name-ivory">Monika Shanbhag</h4>
                <p className="team-title-ivory">
                  Director - Alliance and Operations
                </p>
                <p className="team-description-ivory">
                  Monika oversees strategic partnerships and ensures seamless
                  operational delivery, focusing on participant engagement,
                  content accessibility, and a smooth registration process.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-5">
              <div className="team-card-ivory">
                <img
                  src="https://i.imgur.com/sKefsTM.png"
                  alt="Vikash"
                  className="team-img-ivory"
                />
                <h4 className="team-name-ivory">Vikash</h4>
                <p className="team-title-ivory">
                  Assistant Manager - Customer Support
                </p>
                <p className="team-description-ivory">
                  Vikash provides direct, supportive training experiences,
                  assisting participants with content queries and guiding them
                  through the registration process with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
