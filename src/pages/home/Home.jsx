import React from "react";
import "../../assets/css/home/Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const orgLogos = [
    { src: "./assets/images/home/adani.png", alt: "Adani" },
    { src: "./assets/images/home/grofers.png", alt: "Grofers" },
    { src: "./assets/images/home/gravita.png", alt: "Gravita" },
    { src: "./assets/images/home/zone.png", alt: "Ozone" },
    { src: "./assets/images/home/zupee.png", alt: "Zupee" },
  ];

  return (
    <>
      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-3 fw-bolder hero-heading">
                Our vision is not just to help you get certified, but to empower
                you to reach, 
                <TypeAnimation
                  sequence={[
                    " the next level…",
                    2000,
                    " a better career…",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-gradient"
                  repeat={Infinity}
                />
              </h1>
              <a
                href="#enroll"
                className="btn btn-gradient btn-lg rounded-pill shadow px-5 py-3 mt-4"
              >
                Enroll With Us
              </a>
            </div>
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <img
                src="./assets/images/home/user.png"
                className="img-fluid hero-image-style"
                alt="Deepak"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="cisa-section py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="card-horizontal card mb-3 border-0 shadow-lg">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5">
                <img
                  src="./assets/images/home/cisa.png"
                  className="img-fluid card-image"
                  alt="CISA - Certified Information Systems Auditors concept"
                />
              </div>

              <div className="col-lg-7 d-flex flex-column justify-content-center">
                <div className="card-body p-5  d-flex flex-column justify-content-center">
                  <h3 className="card-title fw-bold">
                    “CISA” – Certified Information systems auditors
                  </h3>
                  <p className="card-text">
                    CISA is a globally recognized certification for IS audit
                    control, assurance, and security professionals. Being
                    CISA-certified showcases your audit experience, skills, and
                    knowledge, and demonstrates you are capable of managing
                    vulnerabilities, ensuring compliance, and instituting
                    controls within an enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="info-cards-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bolder">Who should reach out to us</h2>
            <p className="lead text-muted">
              A complete ecosystem for your career growth.
            </p>
          </div>

          <div className="card-horizontal card mb-5 border-0 shadow-lg">
            <div className="row g-0 align-items-stretch">
              {/* <div className="col-lg-5">
                <img
                  src="./assets/images/home/transfer.png"
                  className="img-fluid card-image"
                  alt="A narrow street leading to the sea"
                />
              </div> */}

              <div className="col-lg-9 order-lg-first">
                <div className="card-body first-card-body p-5 d-flex flex-column justify-content-center">
                  <h3 className="card-title fw-bold">We welcome:</h3>
                  <div className="card-text">
                    <p>
                      &bull; Individuals who aspire to build a successful career
                      in Audit and Risk Management.
                    </p>
                    <p>
                      &bull; Professionals facing challenges in their audit
                      assignments due to limited technical knowledge.
                    </p>
                    <p>
                      &bull; Ambitious learners seeking to accelerate their
                      career growth in today’s fast-paced environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-horizontal card mb-5 border-0 shadow-lg">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5">
                <img
                  src="./assets/images/home/teach_us.png"
                  className="img-fluid card-image"
                  alt="Effective teaching methods"
                />
              </div>
              <div className="col-lg-7">
                <div className="card-body p-5 d-flex flex-column justify-content-center">
                  <h3 className="card-title fw-bold">We Teach:</h3>
                  <p className="card-text">
                    We don’t just teach you to pass the exam — we focus on
                    building strong conceptual clarity and empowering you to
                    reach the next level in your career. We provide better
                    presentation to make you understand the concepts. We will
                    make you memories the concept as well. We prepare you for
                    the real life job assignment problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="courses"
            className="card-horizontal card mb-5 border-0 shadow-lg"
          >
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5">
                <img
                  src="./assets/images/home/certificate.png"
                  className="img-fluid card-image"
                  alt="Certificate of Achievement"
                />
              </div>

              <div className="col-lg-7 order-lg-first">
                <div className="card-body p-5 d-flex flex-column justify-content-center">
                  <h3 className="card-title fw-bold">We Certify:</h3>
                  <p className="card-text">
                    Our certifications are not just credentials; they are a mark
                    of recognition that adds real value to your professional
                    profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-horizontal card mb-5 border-0 shadow-lg">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5">
                <img
                  src="./assets/images/home/transfer.png"
                  className="img-fluid card-image"
                  alt="Transferring experience"
                />
              </div>
              <div className="col-lg-7">
                <div className="card-body p-5 d-flex flex-column justify-content-center">
                  <h3 className="card-title fw-bold">
                    We Transfer Experience:
                  </h3>
                  <p className="card-text">
                    The most valuable asset we offer is practical experience —
                    insights and real-world knowledge that can't be measured in
                    monetary terms, but make all the difference in the real
                    world. Practical industry real life examples what like
                    E-Commerce, Fin-tech, Manufacturing, service organization
                    are using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="organizations-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bolder mb-5">
            Organisations worked with:
          </h2>
          <div className="logo-carousel">
            <div className="logo-track">
              {[...orgLogos, ...orgLogos, ...orgLogos].map((logo, index) => (
                <div className="logo-slide" key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
