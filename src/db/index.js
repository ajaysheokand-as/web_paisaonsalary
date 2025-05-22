// src/db/index.js
import mysql from 'mysql2/promise';
import {  secret } from '@aws-amplify/backend';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || secret('MYSQL_HOST'),
  port: process.env.MYSQL_PORT || secret('MYSQL_PORT'),
  user: process.env.MYSQL_USER || secret('MYSQL_USER'),
  password: process.env.MYSQL_PASSWORD || secret('MYSQL_PASSWORD'),
  database: process.env.MYSQL_DATABASE || secret('MYSQL_DATABASE'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
