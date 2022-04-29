//Import @koa/router package to handle the routing
const Router = require("@koa/router");
//Import methods created in posts.api file
const {createPost, getPost, getPosts,updatePost,deletePost} =  require('../api/posts.api');

//Define the prefix of the api
const router = new Router({
    prefix:'/posts'
})
//GET request
router.get('/',async ctx=>{
    ctx.body= await getPosts() ;
})
//POST request
router.post('/',async ctx=>{
    //Get the post details from the body
    let post = ctx.request.body;
    post = await createPost(post);
    //If the post is added successfully 200 status code is sent as the response
    ctx.response.status = 200;
    ctx.body = post;
})
//GET request to get a specific post
//:id to indicate that id is a parameter not a path
router.get('/:id',async ctx=>{
    const id = ctx.params.id;
    ctx.body = await getPost(id);
})
//Delete Request
router.delete('/:id',async ctx=>{
    //Get the id from the url
    const id = ctx.params.id;
    await deletePost(id);
})
//Update request to update a specific post sent as the id
router.put('/:id',async ctx=>{
    //Get the id from the url
    const id = ctx.params.id;
    //Get the post details from the body
    let post = ctx.request.body;
    post = await updatePost(id,post);
    ctx.response.status = 200;
    ctx.body = post;

})
//Export the router
module.exports = router;