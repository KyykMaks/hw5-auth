import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoDB= async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');

    const uri = `mongodb+srv://${user}:${encodeURIComponent(pwd)}@${url}/${db}?retryWrites=true&w=majority`;

    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.error(' Mongo connection failed:', err.message);
    throw err;
  }
};
