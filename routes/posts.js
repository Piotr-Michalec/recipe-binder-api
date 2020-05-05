const express = require('express')

const router = express.Router();
const Post = require('../models/Post');


//get back all the posts
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch{
        res.json({message: err});
    }

});


//submit a post
router.post('/',(req,res)=>{
   const post = new Post({
      title: req.body.title,
      link: req.body.link
  });
  post.save()
  .then(data =>{
      res.json(data)
      
  })
  .catch(err=>{
      res.json({ message: err})
  }); 
});

  //specific posst
  router.get('/:postId', async (req,res)=>{
    try{
   const post = await Post.findById(req.params.postId)
   res.json(post);
}catch(err){
  res.json({message: err});
}
});

//delete
router.delete('/:postId',async (req,res)=>{
    try{
   const removedPost = await Post.deleteOne({_id: req.params.postId})
   res.json(removedPost);
}catch(err){
  res.json({message:err});
}
});


//update one
router.patch('/:postId',async (req,res)=>{
    try{
   const updatedOne = await Post.updateOne({_id: req.params.postId},
     {$set:{title: req.body.title}}
     );
res.json(updatedOne)
}catch(err){
  res.json({message:err});
}
});

module.exports = router;