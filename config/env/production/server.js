const forgotPasswordTemplate = require('../../email-templates/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://leonunesbs-blog-backend.herokuapp.com',
  admin: {
    url: '/', // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
    serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files
    forgotPassword: {
      from: 'leonunesbs@gmail.com',
      replyTo: 'leonunesbs@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});