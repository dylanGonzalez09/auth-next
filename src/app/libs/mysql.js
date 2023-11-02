import mysql from 'serverless-mysql';

export const conn = mysql({
  config: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    root: 3306,
    database: 'nextauth',
  },
});
