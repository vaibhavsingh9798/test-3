import Link from "next/link";



const fetchData = async () =>{

   try{
     let response = await fetch('http://localhost:8000/posts/',{
      method:'GET',
      headers:{'Content-Type':'application/json'}
     })
     let data = await response.json();
     return data.data;
   }catch(err){
    console.error('somthing wrong with fetch data',err)
   }
}

export default async function Home() {

  const data = await fetchData() || [];
  console.log('fetched data',data, Array.isArray(data))
  
  return (

    <main className="flex  flex-col items-center justify-between p-24">
      <h2>Blogs List</h2>
            <ul className=" text-gray-200">
              {/* { {JSON.stringify(data)} } */}
           { data.length && data.map((blog) => {
          return (   
            <Link href={`/blogs/${blog.id}`} >
            <div className=" mt-10">
            <li key={blog.id}>
            <span>Title: {blog.title} </span>  
            <span>Author: {blog.author} </span>
              </li>
              </div> 
              </Link>
              )
}) }
            
            </ul>
    </main>
  );
}
