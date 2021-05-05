import React from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem";

const BookTemplate = props => {
  const {
    pageContext: {
      title,
      summary,
      imageUrl,
      author: { name },
    },
  } = props;

  return (
    <Layout>
      <BookItem
        bookTitle={title}
        bookSummary={summary}
        authorName={name}
        bookCover={imageUrl}
      />
    </Layout>
  );
};

export default BookTemplate;
