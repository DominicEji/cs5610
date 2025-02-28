const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/cs5610?retryWrites=true&w=majority&appName=FreeCluster`;
const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db('cs5610'); // Return the database instance
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        throw error;
    }
}

async function insertTask(task) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection('tasks').insertOne(task);
        console.log('Task inserted:', result.insertedId);
        return result;
    } catch (error) {
        console.error('Error inserting task:', error);
        throw error;
    }
}

module.exports = { connectToDatabase, insertTask };