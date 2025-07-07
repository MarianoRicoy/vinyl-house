import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import React, { FC } from "react";

interface LayoutMainViewsProps {
  children: React.ReactNode;
}

const LayoutMainViews: FC<LayoutMainViewsProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default LayoutMainViews;
