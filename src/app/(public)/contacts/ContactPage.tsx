import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import ContactSection from "./contactcomponents/aboutcontact"
import Footer from "../home/components/footer"


const ContactPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage