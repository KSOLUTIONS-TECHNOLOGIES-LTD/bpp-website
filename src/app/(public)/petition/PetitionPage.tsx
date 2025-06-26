import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import PetitionForm from "./petitioncomponents/aboutpetition"
import Footer from "../home/components/footer"



const Petitionpage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <PetitionForm />
            <Footer />
        </>
    )
}

export default Petitionpage