exports.onCreatePage = ({ page, actions }: any) => {
  const { createPage } = actions

  if (page.path.match(/\/auth\//)) {
    page.context.layout = 'auth'
    createPage(page)
  }
}
