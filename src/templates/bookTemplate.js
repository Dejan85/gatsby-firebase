import React from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem";

const BookTemplate = props => {
  const {
    pageContext: {
      title,
      summary,
      author: { name },
    },
  } = props;

  return (
    <Layout>
      <BookItem bookTitle={title} bookSummary={summary} authorName={name} />
      {/* <h2>
          {title} - <small>{name}</small>
        </h2>
        <p>{summary}</p> */}
    </Layout>
  );
};

export default BookTemplate;
