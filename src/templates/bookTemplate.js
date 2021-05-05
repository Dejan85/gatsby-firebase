import React, { useContext } from "react";
import BookItem from "../components/BookItem";
import { graphql } from "gatsby";
import { BookComments } from "../components/common";
import { FirebaseContext } from "../components/Firebase";

const BookTemplate = props => {
  const {
    data: {
      book: {
        title,
        summary,
        localImage,
        id,
        author: { name },
      },
    },
  } = props;

  const { firebase } = useContext(FirebaseContext);

  return (
    <section>
      <BookItem
        bookTitle={title}
        bookSummary={summary}
        authorName={name}
        bookCover={localImage.childImageSharp}
      />
      {!!firebase && <BookComments firebase={firebase} bookId={id} />}
    </section>
  );
};

export const query = graphql`
  query BookQuery($bookId: String) {
    book(id: { eq: $bookId }) {
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
`;

export default BookTemplate;
