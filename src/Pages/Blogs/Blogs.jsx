import { Link } from "react-router-dom"
import HomeLayout from "../../Layout/HomeLayout"
import BlogCard from "../../components/BlogCard/BlogCard"
import appwriteService from "../../appwrite/config"
import { useEffect, useState } from "react"
import "./Blogs.css"
const Blogs =()=>{
    const[posts,setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts) => {
            
        if (posts) {
            console.log(posts)
            setPosts(posts.documents)
        }
        }) 
    },[])
    console.log(posts)
    return(
       <HomeLayout>
        <div className="blogs-section">
       
       {posts.map((post, index) => ( 
                    <div key={index}>
                    <BlogCard variant="secondary" post={post}/></div>
                     
                ))}
       
        </div>

       </HomeLayout>
    )
}
export default Blogs