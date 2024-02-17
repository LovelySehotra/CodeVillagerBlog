import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import "./HomeLayout.css"
const HomeLayout =({children})=>{
    return(
       
   
      <div className='layout'>
        <Header />
        {children}
         {/* <Outlet /> */}
       
        {/* <Footer /> */}
      </div>
   

    )
}
export default HomeLayout