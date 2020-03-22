exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // only on the client.
  if (page.path.match(/^\/lessons/)) {
    page.matchPath = "/lessons/*"
    // Update the page.
    createPage(page)
  }
}
