import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { footer } from './footer.module.css';

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <footer className= { footer }>
      <small>{ "Website last built " + data.siteBuildMetadata.buildTime }</small>
    </footer>
  )
}

export default Footer


