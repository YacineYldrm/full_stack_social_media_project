/* Run a database command */

const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
const { writeJsonFile } = require("../data-access/filesystem");

dotenv.config();
console.log(dotenv.config());
// Replace the uri string with your MongoDB deployment's connection string
const uri = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri);

async function run() {
  try {
    // Get the "video" database
    const db = client.db("video");
    // console.log(db);

    // Find and print the storage statistics for the "sample_mflix" database using the 'dbStats' command
    const result = await db.collection("movieDetails").find({}).toArray();
    writeJsonFile('../../movieDetails.json', result)
    console.log(result);
  } finally {
    // Close the database connection on completion or error
    await client.close();
  }
}
run().catch(console.dir);
