const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const bookTemplate = path.resolve("src/templates/bookTemplate.js");
  const {
    data: {
      allBook: { edges },
    },
  } = await graphql(`
    {
      allBook {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  edges.forEach(book => {
    createPage({
      path: `/book/${book.node.id}`,
      component: bookTemplate,
      context: { bookId: book.node.id },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop-html" || stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["main"],
      },
    });
  } else {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["browser", "module", "main"],
      },
    });
  }
};
