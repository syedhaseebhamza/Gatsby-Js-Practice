import * as React from "react";
import About from "./About/about";
import Styles from "../Styles/global.css";

const IndexPage = () => {
  return (
    <main style={Styles}>
      <About />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
