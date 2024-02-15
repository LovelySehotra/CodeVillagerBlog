import HomeLayout from "../../Layout/HomeLayout"
import About from "../../components/About/About"
import './AboutPage.css'
const AboutPage = ()=>{
    return(
        <HomeLayout>
            <div className="about-page">

            <About/>
            </div>
        </HomeLayout>
    )
}
export default AboutPage