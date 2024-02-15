import "./BlogCard.css"
import featured from "../../assets/featured.jpg"
const BlogCard = ({ variant}) => {

    return (
        <>
            {/* { */}
               
                <div className={`blog-detail ${variant==='secondary'? 'secondary': ''}`}>
                    <div className="img">
                        <img src={featured} alt="" />
                    </div>
                    <div className="blog-content">
                        <span className="content-info">
                            <p>Mar 23, 2023</p>
                            <p>
                                2 min</p>
                        </span>
                        <h3 className="content-title">Back to Fiction: What I'm Reading This Summer</h3>
                        <p className="content-paragraph">
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </p>
                    </div>
                </div>
                {/* ) 
                : (<div className="blog-detail">
                    <div className="img">
                        <img src={featured} alt="" />
                    </div>
                    <div className="blog-content">
                        <span className="content-info">
                            <p>Mar 23, 2023</p>
                            <p>
                                2 min</p>
                        </span>
                        <h3 className="content-title">Back to Fiction: What I'm Reading This Summer</h3>
                        <p className="content-paragraph">
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </p>
                    </div>
                </div>) */}
            {/* } */}



        </>
    )
}
export default BlogCard