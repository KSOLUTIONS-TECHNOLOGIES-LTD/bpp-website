import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import Faq from "./faqcomponents/faq"
import Footer from "../home/components/footer"



const FaqPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <Faq />
            <Footer />
        </>
    )
}

export default FaqPage