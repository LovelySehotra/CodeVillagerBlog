import React from 'react'
import { Container, PostForm } from "../../components/index"
import HomeLayout from '../../Layout/HomeLayout'
function AddPost() {
  return (
    <HomeLayout>

    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
    </HomeLayout>
  )
}

export default AddPost