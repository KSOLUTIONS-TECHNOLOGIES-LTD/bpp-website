import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import WhoWeAre from "./component/aboutus"
import VisionMission from "./component/vissionmission"
import BppPurpose from "./component/bpppurpose"
import CoreObjectives from "./component/coreobjectives"
import Footer from "../home/components/footer"


const Aboutpage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar  />
            <WhoWeAre />
            <VisionMission />
            <BppPurpose />
            <CoreObjectives />
            <Footer />
        </>
    )
}

export default Aboutpage