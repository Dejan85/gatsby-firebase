import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BookItemWrapper = styled.section`
  display: flex;
  border: 1px solid #ddd;
  background: white;
  padding: 8px;
  margin-bottom: 8px;

  h2 {
    small {
      font-weight: normal;
      font-size: 14px;
      padding-left: 8px;
    }
  }
`;

const BookItemImageWrapper = styled.div`
  max-width: 200px;

  img {
    max-width: 200px;
  }
`;
const BookItemContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`;

const BookItem = props => {
  const { bookTitle, bookSummary, authorName, bookCover, children } = props;
  const pathToImage = getImage(bookCover);

  return (
    <BookItemWrapper>
      <BookItemImageWrapper>
        <GatsbyImage image={pathToImage} alt="img" />
      </BookItemImageWrapper>
      <BookItemContentWrapper>
        <h2>
          {bookTitle} - <small>{authorName}</small>
        </h2>
        <p>{bookSummary}</p>
        <div>{children}</div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  );
};

export default BookItem;
