import featured from "../../assets/featured.jpg"
import './SingleBlog.css'
const SingleBlog = () => {
    return (
        
            <div className="single-blog-box">

                <div className='single-blog-info'>

                    <p>Mar 23 ,2023</p> <p>2 min read</p>
                </div>
                <h1 className='single-blog-heading'>Back to Fiction: What I'm Reading This Summer</h1>
                <h4 className='single-blog-subheading'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</h4>
                <div className="single-blog-img">
                    <img src={featured} alt="" />
                </div>
                <div className="single-blog-content">
                    <p>
                        Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
                        Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.


                        Create Relevant Content

                        You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.
                    </p>
                </div>
            </div>
        
    )
}
export default SingleBlog;