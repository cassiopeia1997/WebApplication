const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://localhost:27017';
var mongodb;

function connect(){
    mongoClient.connect(mongoDbUrl, (err, client) => {
        if(err){throw err;}
        else{
            console.log("successfully connected");
        }
        mongodb = client.db('BlogServer');
        //client.close();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};
