import { json } from "express"
import fs from 'fs'
import imageKit from "../config/imagekit.js"
import Blog from "../models/blog.js"
import Comment from "../models/comment.js"

export const addBlog = async (req,res) => {
    const {title,subTitle,description,category,isPublished} = json.parse(req.body.blog)

    const imageFile = req.file;

    if(!title || !description || !category || !imageFile){
        return res.json({success:false,message : 'required details'});
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imageKit.upload({
        file : fileBuffer,
        fileName : imageFile.originalname,
        folder : '/blogs'
    })

    const optimizedUrl = imageKit.url({
        path : response.filePath,
        transformation : [
            {quality : 'auto'},
            {format : 'wep'},
            {width : '1280'}
        ]
    });

    const image = optimizedUrl;

    await Blog.create({title,subTitle,description,category,image,isPublished})
    
    res.json({success:true,message : 'Blog added'})
}

export const getAllBlogs = async(req,res) => {
    const blogs = await Blog.find({isPublished:true});

    res.json({success:true, blogs })
}

export const getBlogById = async(req,res) => {
    const { blogId } = req.params;
    const blog = await Blog.find(blogId);

    if(!blog){
        return res.json({success : false,message : 'blog not found'});
    }

    res.json({success : true,blog});
}

export const deleteBlogById = async(req,res) => {
    const { id } = req.parse;
    await Blog.findByIdAndDelete(id);

    await Comment.deleteMany({blog:id});

    res.json({success : true,message : 'blog deleted successfully'});
}

export const togglePublish = async(req,res) => {
    const {id} = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({success : true, message : 'Blog status updated'});
}

export const addComment = async(req,res) => {
    const {blog,name,content} = req.body;

    await Comment.create({blog,name,content});
    res.json({success : true,message : 'comment added for review'});
}

export const getBlogComments = async(req,res) => {
    const {blogId} = req.body;

    const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt : -1})

    res.json({success : true,comments});
}