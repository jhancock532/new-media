import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <p>This is the homepage!</p>
      <StaticImage 
      alt="Generative art background, curvy and colorful." 
      src="../images/generative-background.png" />
    </Layout>
  )
}

export default IndexPage
