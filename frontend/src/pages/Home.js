import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/services");
  };

  return (
    <div
      style={{
        backgroundColor: "#fdf0e0",
        minHeight: "100vh",
      }}
    >
      <Carousel
        controls={true}
        indicators={true}
        interval={3000}
        className="mb-5"
      >
        <Carousel.Item>
          <div
            style={{
              backgroundImage: 'url("/images/image1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "70vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className="display-4 font-weight-bold text-dark"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                width: "70%",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Welcome to Decor Home! We Build Your Vision.
            </h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              backgroundImage: 'url("/images/image2.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "70vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className="display-4 font-weight-bold text-dark"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                width: "70%",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Discover Our Professional Services.
            </h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              backgroundImage: 'url("/images/image3.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "70vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className="display-4 font-weight-bold text-dark"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                width: "70%",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Your Dream Home Awaits!
            </h1>
          </div>
        </Carousel.Item>
      </Carousel>

      <div
        className="text-center my-5"
        style={{
          backgroundColor: "#fdf0e0",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <p
          className="lead"
          style={{
            color: "#4d4d4d",
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: "1.6",
          }}
        >
          We partner with the best companies for construction, painting,
          finishing, windows and doors, ceramics, decor, and more. Explore our
          portfolio to find services that will bring your vision to life.
        </p>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Colonne de gauche */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <img
              src="/images/image4.jpg"
              alt="Image 1"
              className="img-fluid rounded shadow mb-3"
              style={{ height: "45vh" }}
            />
            <img
              src="/images/image5.webp"
              alt="Image 2"
              className="img-fluid rounded shadow"
              style={{ height: "45vh" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-between">
            <img
              src="/images/image6.jpg"
              alt="Image 3"
              className="img-fluid rounded shadow mb-3"
              style={{ height: "40vh" }}
            />
            <img
              src="/images/image7.jpg"
              alt="Image 4"
              className="img-fluid rounded shadow"
              style={{ height: "50vh" }}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleExplore}
            className="btn"
            style={{
              border: "2px solid #ef4024",
              backgroundColor: "#fdf0e0",
              color: "#ef4024",
              fontSize: "1.25rem",
              padding: "15px 30px",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ef4024";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#fdf0e0";
              e.target.style.color = "#ef4024";
            }}
          >
            Explore Our Portfolio
          </button>
        </div>
      </div>

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We offer a range of construction and design services to meet all
                your needs. From painting to plumbing, we have it all.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: contact@decorhome.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <p>Follow us on social media to stay updated.</p>
              <p>
                <a href="#" className="text-light">
                  Facebook
                </a>{" "}
                |{" "}
                <a href="#" className="text-light">
                  Instagram
                </a>{" "}
                |{" "}
                <a href="#" className="text-light">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 Decor Home. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
