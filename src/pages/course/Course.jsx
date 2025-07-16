import React from "react";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaChalkboardTeacher,
  FaBookOpen,
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

  const features1 = [
    "Access to Recorded Live Sessions – Revisit classes anytime at your convenience",
    "Post-Training Support & Career Mentorship – Continued guidance beyond the classroom",
    "Thorough Coverage of All 5 Domains – With interactive Q&A sessions",
    "Practical Real-World Case Studies – Understand complex topics through practical examples",
  ];

  const features2 = [
    "Trainer-Curated Study Materials – Comprehensive PPTs & short notes tailored for exam preparation",
    "10 Full-Length Mock Tests – Simulate the exam environment and assess your readiness",
    "Practice Question Bank – Over 2,500 questions for extensive hands-on practice",
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
            <div className="col-lg-10 text-center">
              <h2 className="course-section-title">About this Course</h2>
              <p className="course-intro-text">
                Unlock your success with 40 hours of power-packed live training
                — featuring interactive sessions, full access to recordings,
                expert-curated study materials, hundreds of practice questions,
                mock exams, and dedicated mentorship to guide you every step of
                the way!
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-4 gy-4">
            <div className="col-lg-6 d-flex">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <FaChalkboardTeacher />
                </div>
                <ul className="list-unstyled m-0">
                  {features1.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle className="course-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <FaBookOpen />
                </div>
                <ul className="list-unstyled m-0">
                  {features2.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle className="course-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
            <p className="pricing-date">
              <strong>Course Start Date:</strong> 02 August 2025
            </p>
            <p className="pricing-timing">
              <strong>Timing:</strong> 08:00 AM to 12:00 PM IST (Sat and Sun)
            </p>
            <hr className="my-3" />
            <p className="pricing-original-fees">
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
    </div>
  );
};

export default Course;
