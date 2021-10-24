import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>Welcome to my blog :)</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <small>Updated: {node.parent.modifiedTime}</small>
            <MDXRenderer>
              { node.body }
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      body
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      parent {
        ... on File {
          id
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}`;


export default BlogPage