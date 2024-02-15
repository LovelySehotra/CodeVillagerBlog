import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const HomeLayout =({children})=>{
    return(
       
   
      <div className='layout'>
        <Header />
        {children}
         {/* <Outlet /> */}
       
        <Footer />
      </div>
   

    )
}
export default HomeLayout