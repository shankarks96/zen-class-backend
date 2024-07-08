import dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';
const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION || '1d';
const JWT_ISSUER = process.env.JWT_ISSUER || 'http://localhost:3000';
const JWT_AUDIENCE = process.env.JWT_AUDIENCE || 'ZEN-CLASS-APP';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'zen_class_app';

export const appConfig = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
  JWT_EXPIRATION,
  JWT_REFRESH_EXPIRATION,
  JWT_ISSUER,
  JWT_AUDIENCE,
  MONGO_DB_NAME,
};
