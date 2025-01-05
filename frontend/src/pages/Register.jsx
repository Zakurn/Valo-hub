import React from 'react';
import Swal from 'sweetalert2'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Register.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function doRegister(data) {
    axios.post('http://localhost:3000/register', {
      username: data.username,
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
      });
      navigate("/");
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Username Sudah ada",
          confirmButtonColor: "#198754"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registrasi Gagal. Coba lagi",
          confirmButtonColor: "#198754"
        });
      }
    });
  }

  return (
    <Container className="register-container" fluid>
      <Row className='register-form'>
        <Col md={12}>
          <h2 className="text-center mb-4">Buat Akun</h2>
          <Form onSubmit={handleSubmit(doRegister)}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" required {...register("username")} />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required {...register("name")} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required {...register("email")} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required {...register("password")} />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
