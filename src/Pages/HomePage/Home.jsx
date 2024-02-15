import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config";
import { Container, PostCard } from '../../components'
// import backgroundVideo from "../assets/bgvideo.mp4"
import FeaturedBlog from '../../components/FeaturedBlog/FeaturedBlog';
import BlogCard from '../../components/BlogCard/BlogCard';
import "./Home.css"
import About from '../About/About';
import HomeLayout from '../../Layout/HomeLayout';
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
        <HomeLayout>
        <div className="homepage">
            <Container>
                <FeaturedBlog />
                <hr className='break-line' />
                <div className='blogcard-section'>
                    <div className='blogcard'>
                        <h4 className='blogcard-label'>X-E-CUTE</h4>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard /> <BlogCard />
                    </div>

                    <div className='about'>
                        <About />

                    </div>
                </div>


            </Container>
        </div>
        </HomeLayout>
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