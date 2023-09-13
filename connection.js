const{ MongoClient} = require('mongodb');

async function main(){

    const uri ="mongodb+srv://peanutbuttersharkface:1388Mann@cluster0.kg6he2d.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    
    try{
        await client.connect();

       
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
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`)
        
    });
}
