import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "../LoginForm/LoginForm";
function LoggedLandingD() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="loggedLanding">
      <div className="container">
        <div className="row">
          <div className="contentWrap">
            <div className="pageTitle">
              <h1 className="mb-5">Assignment 2 Step 1</h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>

            <Button variant="primary" onClick={handleShow}>
              Need Log In
            </Button>
            <Modal show={show} onHide={handleClose} id="modalForm"  centered>
              <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <p>User Name : redmango</p>
              <p>Password : redmango1234</p>
                <LoginForm />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoggedLandingD;
