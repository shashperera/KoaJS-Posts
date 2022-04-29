//Initiate client
const {MongoClient} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("You are now successfully connected to MongoDB");
})

module.exports = client;
