import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import backgroundVideo from "../assets/bgvideo.mp4"

function Home(){
    const [posts, setPosts] = useState([]) 
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
        return (
            <div className="w-full  text-center">
                <Container>
                    <div className=''>
                    <video autoPlay loop muted id='video'>
                        <source src={backgroundVideo} type='video/mp4'/>
                      
                      </video>
                    </div>
                    <div className='h-48 bg-black text-red-700 pt-20'>
                   Comming Soon
                    </div>
                   
                    
                    
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home