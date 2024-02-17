import HomeLayout from "../../Layout/HomeLayout.jsx"
import SingleBlog from "../../components/SingleBlog/SingleBlog.jsx";
import "./SingleBlogPage.css"
const SingleBlogPage =()=>{
    
    return(
       <HomeLayout>
        <div className="blog-page-box">

        <SingleBlog/>
        </div>
       </HomeLayout>
    )
}
export default SingleBlogPage;