import * as React from "react";
import { Link, graphql } from "gatsby";
import BookItem from "../components/BookItem";
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
// import Seo from "../components/seo"
import styled from "styled-components";

const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`;

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
          <BookItem
            key={id}
            bookTitle={title}
            bookSummary={summary}
            authorName={name}
          >
            <h2>{title}</h2> - <small>{name}</small>
            <div>{summary}</div>
            <LinkButton>
              <Link to={`/book/${id}`}>Join coversation</Link>
            </LinkButton>
          </BookItem>
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
