import React from "react";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  BsClipboardCheck,
  BsBank,
  BsHddStack,
  BsGraphUp,
  BsShieldCheck,
} from "react-icons/bs";

import "../../assets/css/course/Course.css";

const Course = () => {
  const domainsData = [
    {
      icon: <BsClipboardCheck />,
      title: "Domain 1 > 18%",
      description: "Information system auditing process",
    },
    {
      icon: <BsBank />,
      title: "Domain 2 > 18%",
      description: "Governance & Management of IT",
    },
    {
      icon: <BsHddStack />,
      title: "Domain 3 > 12%",
      description:
        "Information Systems Acquisition, Development & Implementation",
    },
    {
      icon: <BsGraphUp />,
      title: "Domain 4 > 26%",
      description: "Information Systems Operations and Business Resilience",
    },
    {
      icon: <BsShieldCheck />,
      title: "Domain 5 > 26%",
      description: "Protection of Information Assets",
    },
  ];

  return (
    <div className="course-page-ivory">
      <section className="course-hero-section text-center">
        <div className="container">
          <h1 className="course-main-title">
            Certified Information Systems Auditor
          </h1>
        </div>
      </section>

      <section className="about-course-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="course-section-title">About this Course</h2>
              <p className="course-intro-text">
                Unlock your success with 40 hours of power-packed live training
                — featuring interactive sessions, full access to recordings,
                expert-curated study materials, hundreds of practice questions,
                mock exams, and dedicated mentorship to guide you every step of
                the way!
              </p>
              <ul className="course-features-list list-unstyled mt-4">
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Access to Recorded Live Sessions</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Post-Training Support & Career Mentorship</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Thorough Coverage of All 5 Domains</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Practical Real-World Case Studies</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Trainer-Curated Study Materials</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>10 Full-Length Mock Tests</span>
                </li>
                <li>
                  <FaCheckCircle className="course-check-icon" />
                  <span>Practice Question Bank – Over 2,500 questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="domains-section">
        <div className="container">
          <h2 className="course-section-title text-center">CISA Domains</h2>
          <div className="course-title-underline"></div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              {domainsData.map((domain, index) => (
                <div className="domain-item" key={index}>
                  <div className="domain-icon-wrapper">{domain.icon}</div>
                  <div className="domain-text-content">
                    <h4 className="domain-title">{domain.title}</h4>
                    <p className="domain-description mb-0">
                      {domain.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container text-center">
          <h2 className="course-section-title">Secure Your Spot</h2>
          <div className="course-title-underline"></div>
          <div className="pricing-box-ivory mx-auto mt-4">
            <p>
              <strong>Course Start Date:</strong> 02 August 2025
            </p>
            <p>
              <strong>Timing:</strong> 08:00 AM to 12:00 PM IST (Sat and Sun)
            </p>
            <hr className="my-3" />
            <p>
              <strong>Original Fees:</strong> <del>INR 17000</del>
            </p>
            <p className="final-price-ivory">
              Discounted Fee: INR 10,999 + Taxes
            </p>
            <p className="international-price-ivory">
              International Participants: $220
            </p>
          </div>

          <div className="payment-block-ivory mx-auto">
            <button className="btn-pay-now-ivory">Pay Now</button>
            <p className="razorpay-text-ivory">
              Powered by <span className="fw-bold">Razorpay</span>
            </p>
          </div>

          <div className="social-icons-course-ivory">
            <a href="#" className="social-icon-course whatsapp">
              <FaWhatsapp />
            </a>
            <a href="#" className="social-icon-course linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon-course youtube">
              <FaYoutube />
            </a>
          </div>

          <a href="#" className="recorded-lectures-link-ivory">
            Interested in Recorded Lectures?
          </a>
        </div>
      </section>

      <section className="certification-section text-center">
        <div className="container">
          <h2 className="course-section-title">Certification</h2>
          <div className="course-title-underline"></div>
          <p className="mt-3 mx-auto certification-text-ivory">
            Upon successful completion of the Preparation training on CISA the
            candidate will be awarded a certificate of completion from TechEd
            Academy.
          </p>
          <div className="certificate-image-wrapper mx-auto mt-4">
            <img
              src="./assets/images/course/certificate.png"
              alt="Sample Certificate of Completion"
              className="certificate-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
