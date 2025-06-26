import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import Abouttrain from "./traincomponents/abouttrain"
import BPPTrainingSection from "./traincomponents/bpptrainings"
import UpcomingTrainings from "./traincomponents/upcomingtrainings"
import Footer from "../home/components/footer"



const Trainpage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <Abouttrain />
            <BPPTrainingSection />
            <UpcomingTrainings />
            <Footer />
        </>
    )
}

export default Trainpage