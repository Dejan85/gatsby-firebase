import React from "react";
import Layout from "../components/layout";

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
      <section>
        <h2>
          {title} - <small>{name}</small>
        </h2>
        <p>{summary}</p>
      </section>
    </Layout>
  );
};

export default BookTemplate;
