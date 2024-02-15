import HomeLayout from "../../Layout/HomeLayout"
import BlogCard from "../../components/BlogCard/BlogCard"
import "./Blogs.css"
const Blogs =()=>{
    return(
       <HomeLayout>
        <div className="blogs-section">
        <BlogCard variant="secondary" />
        <BlogCard variant="secondary" />
        <BlogCard variant="secondary" />
        <BlogCard variant="secondary" />
        <BlogCard variant="secondary" />
         {/* <BlogCard variant="secondary" /> */}
        </div>

       </HomeLayout>
    )
}
export default Blogs