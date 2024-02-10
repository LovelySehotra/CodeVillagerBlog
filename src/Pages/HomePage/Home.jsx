import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config";
import { Container, PostCard } from '../../components'
// import backgroundVideo from "../assets/bgvideo.mp4"
import FeaturedBlog from '../../components/FeaturedBlog/FeaturedBlog';
import BlogCard from '../../components/BlogCard/BlogCard';
import "./Home.css"
function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        // posts.length == 0 ?
        <div className="w-full  text-center homepage ">
            <Container>
                <FeaturedBlog />
                <hr className='break-line' />
                <div className='blogcard-section'>
                    <div className='blogcard'>
                        <h4 className='blogcard-label'>X-E-CUTE</h4>
                        <BlogCard />
                    </div>
                    <hr className='break-line-verticle' />
                </div>

            </Container>
        </div>
        // :<div className='w-full py-8'>
        // <Container>
        //     <div className='flex flex-wrap'>
        //         {posts.map((post) => (
        //             <div key={post.$id} className='p-2 w-1/4'>
        //                 <PostCard {...post} />
        //             </div>
        //         ))}
        //     </div>
        // </Container>
        // </div>
    )


}

export default Home