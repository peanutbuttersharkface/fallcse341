const {MongoClient} = require('mongodb');

async function main(){

    const uri ="mongodb+srv://peanutbuttersharkface:1388Mann@cluster0.kzcrjyl.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    
    try{
        await client.connect();

       await listDatabases(client);
       
    } catch (e){
        console.error(e);
    } finally{
        await client.close();
    }
    
}

main().catch(console.error);

async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
