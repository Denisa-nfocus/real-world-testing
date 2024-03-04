// redoc.config.js
module.exports = {
  sections: [
    {
      name: 'User and authentication',
      content: 'auto/auto_user_and_authentication.md',
    },
    {
      name: 'Articles',
      content: 'auto/auto_articles.md',
    },
    {
      name: 'Favorites',
      content: 'auto/auto_favorites.md',
    },
    {
      name: 'Comments',
      content: 'auto/auto_comments.md',
    },
    {
      name: 'Profile',
      content: 'auto/auto_profile.md',
    },
    {
      name: 'Tags',
      content: 'auto/auto_tags.md',
    },
  ],
  output: 'auto_api_swagger.html', // Output file name
  input: '/openapi.yaml', // Path to your OpenAPI spec file
}
