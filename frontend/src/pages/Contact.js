import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleContact = () => {
    if (message.trim() !== "") {
      setSuccessMessage("Your message has been sent successfully.");
      setMessage("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "5rem 0",
      }}
    >
      <Container className="py-5 fw-bold text-center">
        <h1 className="mb-4 text-black">Contact</h1>

        <Alert variant="info" className="mb-4">
          If you have any problems, questions, or suggestions, please feel free
          to reach out. We're here to help!
        </Alert>

        <Form>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control
              as="textarea"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleContact}
            style={{
              backgroundColor: "#F04225",
              borderColor: "#F04225",
            }}
          >
            Send
          </Button>
        </Form>

        {successMessage && (
          <Alert variant="success" className="mt-3">
            {successMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ContactPage;
