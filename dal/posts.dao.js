//Require the MongoDB connection created in index.js and then mention the db name
//within db() and mention the collection name within collection()
const posts = require('./index').db('posts').collection('posts');

//Require ObjectId in order to access documents based on the _id
const ObjectId = require('mongodb').ObjectId;

//Create
//This method accepts a post object with name, description, qty and price as parameter
//and inserts it to the post collection using the insertOne() method
const save = async ({name, description}) => {
    const result = await posts.insertOne({name, description});
    //returns the inserted data
    return result.ops[0];
}

//Read All
//This method will retrieve all the posts from the database
const getAll = async () =>{
    const cursor = await posts.find();
    //Converts the result into an array
    return cursor.toArray();
}

//Read Specific posts
//This method will retrieve a specific post from the database based on the id
const getById = async (id) =>{
    return await posts.findOne({_id:ObjectId(id)});
}
//Update
//This method accepts an id and a post object with name, description, qty and price as parameter
//The id is the id of the post to edit and the post object is the post that has been edited
//The replaceOne() method is used to update the post
const update = async (id, {name,description}) =>{
    console.log(id);
    const result = await posts.replaceOne({_id:ObjectId(id)}, {name,description});
    return result.ops[0];
}
//Remove
//This method accept the id of the post to be removed
//deleteOne() method is used to delete the post from the database
const removeById = async id =>{
    await posts.deleteOne({_id:ObjectId(id)});
}
//Export the functions
module.exports = {getAll,getById,removeById,save,update};



