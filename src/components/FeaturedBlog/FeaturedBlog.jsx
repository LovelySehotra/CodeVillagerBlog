import "./FeaturedBlog.css"
import featured from "../../assets/featured.jpg"
const FeaturedBlog = () => {

    return (
        <>
            <div className='featured-blog'>
                <div className="featured-blog-detail">
                    <img src={featured} alt="" />
                    <div className="content">
                    <span>
                        <p>Mar 23, 2023</p>
                        <p>
                            2 min</p>
                    </span>
                    <h3>Back to Fiction: What I'm Reading This Summer</h3>
                    <p className="paragraph-content">
                        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                    </p>
                    </div>
                </div>
                <div className="featured-box-label">
                    <p>FEATURED POST</p>
                </div>
            </div>
        </>
    )
}
export default FeaturedBlog