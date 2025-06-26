import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import Aboutnews from "./newscomponents/aboutnews"
import NewsAndBlogsSection from "./newscomponents/news"
import Footer from "../home/components/footer"


const Newspage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <Aboutnews />
            <NewsAndBlogsSection />
            <Footer />
        </>
    )
}

export default Newspage