import React from "react";
import { Container } from 'react-bootstrap';

function Jumbotron() {
  const username = localStorage.getItem("username");

  return (
    <>
      <div className="my-5">
        <div className="p-5 text-center ">
          <Container className="py-5" fluid>
            <h1 className="text-body-emphasis">Selamat Datang,{username}</h1>
            <p className="col-lg-8 mx-auto lead">
            Kamu baru saja mempublikasikan artikel yang penuh dengan tips dan trik menarik Valorant. Terus Posting Artikel Menarik tentang Valorant untuk mendapatkan inspirasi dan informasi terbaru dari kami.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
