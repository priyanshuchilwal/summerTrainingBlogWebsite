import mongoose from "mongoose";

export default async function connect() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mernblog:YyXPg2pyO7z3CGMd@blogcluster0.gl3boaq.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`DB connection error: ${error}`);
  }
}
