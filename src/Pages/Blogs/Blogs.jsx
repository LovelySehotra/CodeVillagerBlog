import { Link } from "react-router-dom"
import HomeLayout from "../../Layout/HomeLayout"
import BlogCard from "../../components/BlogCard/BlogCard"
import "./Blogs.css"
const Blogs =()=>{
    return(
       <HomeLayout>
        <div className="blogs-section">
            <Link to="/blog/:id">
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
            <Link>
        <BlogCard variant="secondary" />
            </Link>
         {/* <BlogCard variant="secondary" /> */}
        </div>

       </HomeLayout>
    )
}
export default Blogs