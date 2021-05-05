import React from "react";
import Layout from "../components/layout";
import BookItemContent from "../components/BookItemContent";

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
      <BookItemContent
        bookTitle={title}
        bookSummary={summary}
        authorName={name}
        bookCover={imageUrl}
      />
    </Layout>
  );
};

export default BookTemplate;
