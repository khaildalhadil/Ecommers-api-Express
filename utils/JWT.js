import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const pkey = process.env.SECRETKEY;

export const createToken = (payload) => {
  return jwt.sign(payload, pkey);
}

export const checkToekn = (token) => {
  const payload = jwt.verify(token, pkey);
  return payload
}
