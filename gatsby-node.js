const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const eventPostTemplate = path.resolve("./src/templates/event_post.js")

  const res = await graphql(`
    query {
      allContentfulEvent {
        nodes {
          slug
        }
      }
    }
  `)
  res.data.allContentfulEvent.nodes.forEach(node => {
    createPage({
      component: eventPostTemplate,
      path: `/events/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
