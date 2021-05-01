module.exports = ({ env })=>({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'sa-east-1',
      params: {
        Bucket: 'leonunesbs-blog',
      },
    }
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'leonunesbs@gmail.com',
      defaultReplyTo: 'leonunesbs@gmail.com',
      testAddress: 'leonunesbs@gmail.com',
    },
  },
});