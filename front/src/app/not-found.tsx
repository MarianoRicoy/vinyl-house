import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar/navbar";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div
          className="min-h-screen flex flex-col items-center justify-center bg-slate-950 bg-cover bg-center text-white text-center px-4"
          style={{ backgroundImage: "url('/notfound1.jpg')" }}
        >
          <h1 className="text-7xl font-bold drop-shadow-lg">404</h1>
          <p className="text-2xl text-gray-200 mb-8 drop-shadow">
            Página no encontrada... como ese vinilo raro que siempre se pierde
          </p>
          <Link
            href="/"
            className="text-white underline text-lg hover:text-yellow-300 transition"
          >
          Volver al inicio
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
