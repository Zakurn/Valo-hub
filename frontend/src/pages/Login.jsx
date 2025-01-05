import React from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function doLogin(data) {
    axios.post('http://localhost:3000/login', {
      username: data.username,
      password: data.password,
    }).then((response) => {
      const { token, expiresIn, username } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
      });

      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        Swal.fire({
          icon: "info",
          title: "Session Expired",
          text: "Please log in again."
        });
        navigate("/");
      }, expiresIn * 1000);

      navigate("/home");
    }).catch(() => {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: "Username atau Password Salah!!!"
      });
    });
  }

  const registerNavigation = () => {
    navigate('/register');
  };

  return (
    <Container className="login-container" fluid>
      <Row className="login-form">
        <Col md={12}>
          <h2>Sign In</h2>
          <Form onSubmit={handleSubmit(doLogin)}>
            <Form.Group controlId="formUsername" className="py-2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" required {...register("username")} />
            </Form.Group>

            <Form.Group controlId="formPassword" className="py-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required {...register("password")} />
            </Form.Group>

            <Button variant="primary" type="submit" className="button mt-3">
              Login
            </Button>
          </Form>
        </Col>
        <Col className="separator mt-2">
          <p>Tidak Punya Akun?</p>
        </Col>
        <Button variant="light" onClick={registerNavigation} style={{ boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.75)" }}>Buat Akun Sekarang</Button>
      </Row>
    </Container>
  );
}

export default Login;
