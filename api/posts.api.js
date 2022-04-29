//Import the methods that we exported in posts.dao.js
const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');

//Map the save() method
const createPost = async ({name, description}) => {
    //Create a post object
    const post = {
        name,
        description
    }
    //Call the Save method and pass the Post object
    return await save(post);
}
//Map the getAll() method
const getPosts = async ()=>{
    //
    return await getAll();
}
//Map the getById() method
const getPost = async id =>{
    return await getById(id);
}
//Map the removeById() method
const deletePost = async id =>{
    return await removeById(id);
}
//Map the update method, Gets the id and Post object as parameters and the passes it to the
//update() method
const updatePost = async (id,{name, description})=>{
    return await update(id,{name, description});
}
//Export the methods to be used in routes
module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
}