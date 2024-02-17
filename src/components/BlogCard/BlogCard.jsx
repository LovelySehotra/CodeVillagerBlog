import "./BlogCard.css"
import appwriteService from "../../appwrite/config.js"
import featured from "../../assets/featured.jpg"
const BlogCard = ({ variant, post }) => {
    console.log(post)
    const dateObject = new Date(post.$createdAt);
const formattedDateString = dateObject.toDateString();
 
    return (
        <>
            <div className={`blog-detail ${variant === 'secondary' ? 'secondary' : ''}`}>
                <div className="img">
                    <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} />
                </div>
                <div className="blog-content">
                    <span className="content-info">
                        <p>{formattedDateString}</p>
                        <p>
                            2 min</p>
                    </span>
                    <h3 className="content-title">{post?.title ?? "title"}</h3>
                    <p className="content-paragraph" dangerouslySetInnerHTML={{ __html: post?.content }}>
                    </p>
                </div>
            </div>
        </>
    )
}
export default BlogCard