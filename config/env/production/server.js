const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('HEROKU_URL'),
  admin: {
    serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files
    forgotPassword: {
      from: 'leonunesbs@gmail.com',
      replyTo: 'leonunesbs@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});