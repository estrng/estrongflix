import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import { Main } from "./styles";

function PageRoot({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageRoot;
