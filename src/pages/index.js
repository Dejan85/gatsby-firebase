import * as React from "react";
import { Link, graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
// import Seo from "../components/seo"

const IndexPage = props => {
  const {
    data: {
      allBook: { edges },
    },
  } = props;

  return (
    <Layout>
      {edges.map(book => {
        const {
          node: {
            title,
            id,
            summary,
            author: { name },
          },
        } = book;

        return (
          <div key={id}>
            <h2>{title}</h2> - <small>{name}</small>
            <div>{summary}</div>
            <Link to={`/book/${id}`}>Join coversation</Link>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          title
          summary
          author {
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
