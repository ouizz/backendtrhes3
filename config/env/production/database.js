// path: ./config/env/production/database.ts

import { parse } from 'pg-connection-string';
const config = parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: config.DATABASE_HOST,
      port: config.DATABASE_PORT,
      database: config.DATABASE_NAME,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});