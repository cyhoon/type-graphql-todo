import * as mongoose from 'mongoose';

const mongodbURL = 'mongodb://localhost:27017/type-graphql-todo';

async function connectMongoDB() {
  console.log('Connecting mongodb connection');

  try {
    await mongoose.connect(mongodbURL, { useNewUrlParser: true });
    console.log('Success mongodb connection');
  } catch (error) {
    console.error('Fail mongodb connection');
  }
}

export default connectMongoDB;
