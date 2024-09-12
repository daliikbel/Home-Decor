import React from "react";

const AboutUsPage = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: "url('/images/aboutUs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5 text-center">
        <h1 className="text-dark fw-bold mb-4">About Us</h1>
        <p className="text-dark fw-bold mb-4">
          We are a platform dedicated to all your construction and renovation
          needs. Whether it's painting, doors and windows, plumbing, or
          gardening, we connect you with skilled and reliable companies. Our
          services are accessible to everyone, whether you're an individual or
          a business.
        </p>
        <h2 className="text-dark fw-bold mb-3">Our Story</h2>
        <p className="text-dark fw-bold mb-4">
          Launched in 2024, our platform was created to simplify access to
          construction services. We have gathered experts from various fields to
          offer a complete and high-quality solution. Today, we work with
          reputable companies known for their expertise.
        </p>
        <h2 className="text-dark fw-bold mb-3">Our Values</h2>
        <ul className="text-dark fw-bold list-unstyled">
          <li>
            <strong>Professionalism:</strong> We select the best providers to
            offer you outstanding work.
          </li>
          <li>
            <strong>Transparency:</strong> You can compare offers and choose
            with confidence.
          </li>
          <li>
            <strong>Innovation:</strong> We modernize access to construction
            services with practical solutions.
          </li>
        </ul>
        <h2 className="text-dark fw-bold mb-3">Why Choose Us</h2>
        <p className="text-dark fw-bold">
          We offer a wide range of services, from renovation to full
          construction projects. With us, you quickly connect to top companies
          for your needs. We guarantee tailored, effective solutions that meet
          your expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;