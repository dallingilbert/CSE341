const { MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@webbackenddev.zwlai5b.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const connectDB = async() => {
    try {
        await client.connect();    
    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }
}

module.exports = { connectDB };