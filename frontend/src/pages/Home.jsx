import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Swal from 'sweetalert2'
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  axios.get("http://localhost:3000/posts").then((response) => {
    setPosts(response.data);
  });

  const handlePostDelete = (postsTitle) => {
    axios.delete(`http://localhost:3000/posts/${postsTitle}`)
      .then(() => {
        setPosts(posts.filter(post => post.title !== postsTitle));
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Postingan Telah Dihapus!"
        });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Postingan gagal hapus!"
        });
      });
  }

  const infoArticle = () => {
    Swal.fire({
      icon: "info",
      title: "Coming Soon",
      text: "Detail Article masih dalam pengembangan."
    });
  };

  return (
    <>
      <Header />
      <Jumbotron />
      <h1 className="text-center">Post Anda</h1>
      <hr style={{ width: 150, margin: "0 auto" }} className="text-center" />
      <Container className="d-flex justify-content-center flex-wrap">
        {posts.map((p) => (
          <Card
            key={p.id}
            style={{
              width: "18rem",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Img variant="top" src={p.img_url} />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>{p.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {p.date}
                </Card.Subtitle>
                <Card.Text>{p.desc}</Card.Text>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={infoArticle}
                  className="mb-2 mr-2"
                >
                  Go on Article
                </Button>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => handlePostDelete(p.title)}
                    className="mb-2"
                  >
                    Delete Post
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
