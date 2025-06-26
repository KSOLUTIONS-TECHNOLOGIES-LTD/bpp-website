import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import AboutDgSection from "./dgscomponents/aboutdg"
import LatestInformations from "./dgscomponents/dginformation"
import NewsSection from "./dgscomponents/newssection"
import Footer from "../home/components/footer"



const DgsPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <AboutDgSection />
            <LatestInformations />
            <NewsSection />
            <Footer />
        </>
    )
}

export default DgsPage