import React from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem";

const BookTemplate = props => {
  const {
    pageContext: {
      title,
      summary,
      localImage,
      author: { name },
    },
  } = props;

  return (
    <Layout>
      <BookItem
        bookTitle={title}
        bookSummary={summary}
        authorName={name}
        bookCover={localImage.childImageSharp}
      />
    </Layout>
  );
};

export default BookTemplate;
