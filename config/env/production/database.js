module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: 'ls-8032805010d2fe7921cb2c79a3408c75c45a60b1.c9koqwe84rkw.ap-southeast-1.rds.amazonaws.com',
        port: '3306',
        database: 'httpstha_thekaka',
        user: 'dbmasteruser',
        password: 'HnbtvWSqEDPGUYC2Mgpjxk',
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });