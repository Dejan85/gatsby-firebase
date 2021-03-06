import * as React from "react";
import { Link, graphql } from "gatsby";
import BookItem from "../components/BookItem";
// import { StaticImage } from "gatsby-plugin-image"
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
    <section>
      {edges.map(book => {
        const {
          node: {
            title,
            id,
            summary,
            localImage,
            author: { name },
          },
        } = book;

        return (
          <BookItem
            key={id}
            bookTitle={title}
            bookSummary={summary}
            authorName={name}
            bookCover={localImage.childImageSharp}
          >
            <h2>{title}</h2> - <small>{name}</small>
            <div>{summary}</div>
            <LinkButton>
              <Link to={`/book/${id}`}>Join coversation</Link>
            </LinkButton>
          </BookItem>
        );
      })}
    </section>
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
          localImage {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 200, placeholder: BLURRED)
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
