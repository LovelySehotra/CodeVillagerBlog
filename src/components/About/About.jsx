import featured from "../../assets/featured.jpg"
import "./About.css"
const About = () => {
    return (
        <div className='about-component'>
            <div className='about-article'>


                <h4>ABOUT ME</h4>

                <img width="250px" src={featured} alt="" />
                <p>

                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <a href="">Read More</a>
            </div>
            <hr className='break-line' />
            <div>
                <h4>FOLLOW ME</h4>
                <hr className='break-line' />
                <p>Social Media</p>
                <hr className='break-line' />
            </div>
            <div className="about-article">


                <h4>ABOUT ME</h4>

                <img src={featured} alt="" />
                <p>

                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <a href="">Read More</a>
            </div>

        </div>
    )
}
export default About;