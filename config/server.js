const forgotPasswordTemplate = require('./email-templates/forgot-password');
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'aab54fe96a357ba2637b076ede4533ad'),
    },
    serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files
    forgotPassword: {
      from: 'leonunesbs@gmail.com',
      replyTo: 'leonunesbs@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
