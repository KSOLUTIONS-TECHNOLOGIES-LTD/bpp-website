import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import ArticleSection from "./newsdetailscomponents/details"
import BlogCard from "./newsdetailscomponents/blogpost"
import Footer from "../home/components/footer"



const Detailspage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <ArticleSection />
            <BlogCard />
            <Footer />
        </>
    )
}

export default Detailspage