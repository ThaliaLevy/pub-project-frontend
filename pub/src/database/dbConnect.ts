import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://thalialevy:123@clustergithub.cngtep6.mongodb.net/test`)

let db = mongoose.connection;

export default db;