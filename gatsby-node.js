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
  `);

  edges.forEach(book => {
    createPage({
      path: `/book/${book.node.id}`,
      component: bookTemplate,
      context: book.node,
    });
  });
};
