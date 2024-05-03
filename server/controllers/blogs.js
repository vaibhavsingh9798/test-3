const Blog = require("../models/blog")



exports.getPosts = async (req,res) =>{

    try{

        let posts = await Blog.findAll()
        console.log('findAll',posts)
        return res.status(200).json({success:true,data:posts})

    }catch(error){
        return res.status(500).json({success:false,message:'Internal server error!'})
    }
}

exports.postPosts = async (req,res) =>{
    console.log('post..',req.body)
    try{

        let post = await Blog.create({...req.body,date: new Date()})
        return res.status(201).json({success:true,data:post})

    }catch(error){
        return res.status(500).json({success:false,message:'Internal server error!'})
    }

}
