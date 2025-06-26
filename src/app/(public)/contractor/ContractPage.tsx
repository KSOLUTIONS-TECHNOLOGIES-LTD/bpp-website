import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import AboutContract from "./contractorscomponents/aboutcontract"
import ContractorSection from "./contractorscomponents/contracts"
import Footer from "../home/components/footer"



const ContractPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <AboutContract />
            <ContractorSection />
            <Footer />
        </>
    )
}

export default ContractPage