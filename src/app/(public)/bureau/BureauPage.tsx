import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import Bureau from "./bureaucomponents/functions"
import Footer from "../home/components/footer"



const BureauPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <Bureau />
            <Footer />
        </>
    )
}

export default BureauPage