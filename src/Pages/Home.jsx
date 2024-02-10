import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
// import backgroundVideo from "../assets/bgvideo.mp4"
import FeaturedBlog from '../components/FeaturedBlog/FeaturedBlog';

function Home(){
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
            <div className="w-full  text-center">
                <Container>
                  <FeaturedBlog/>  
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