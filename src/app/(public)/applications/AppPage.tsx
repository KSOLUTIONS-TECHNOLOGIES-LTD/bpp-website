import { useNavigate } from "react-router"
import Navbar from "../home/components/navbar"
import Apps from "./appcomponent/aboutapp"
import AppApplications from "./appcomponent/appaplications"
import Footer from "../home/components/footer"

const AppPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar />
            <Apps />
            <AppApplications />
            <Footer />
        </>
    )
}

export default AppPage