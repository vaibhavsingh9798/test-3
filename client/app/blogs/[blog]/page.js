"use client"
import {  usePathname } from "next/navigation";
import { useEffect, useState } from "react";




export default  function Blog () {
const [blog,setBlog] = useState()
   const id = usePathname().split('/')[2];
   console.log('id...',id)

   const fetchData = async (id) =>{

    try{
      let response = await fetch('http://localhost:8000/posts/',{
       method:'GET',
       headers:{'Content-Type':'application/json'}
      })
      let data = await response.json();
      console.log('data..',data)
      
      let filterBlog =  data.data.filter((blog) => blog.id == id);
      console.log('fil data..',filterBlog)
       setBlog(filterBlog[0])
    }catch(err){
     console.error('somthing wrong with fetch data',err)
    }
 }

   useEffect(() =>{
  fetchData(id);
   },[])

    return(
        <>
       
        {/* {JSON.stringify(blog)} */}
    { blog &&   < div className="flex  flex-col justify-center items-center gap-5">
                 <h2>Blog</h2>
            <div>Title : {blog.title}</div>
            <div>Date : {blog.date}</div>
            <div>Author : {blog.author}</div>
            <div>Content : {blog.content}</div> 
        </div> }
        </>
    )
}