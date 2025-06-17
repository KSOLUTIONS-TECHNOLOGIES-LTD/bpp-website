import { useNavigate } from "react-router"
import Section from "./components/Section"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero"
import DashedLine from "./components/dashlines"
import WelcomeSection from "./components/welcomesection"
import LatestInformation from "./components/latestinformation"
import ScrollableCards from "./components/scroolablecards"
import DocumentSection from "./components/documentsection"
import BppApplications from "./components/bppapplications"
import Footer from "./components/footer"

const Homepage = () =>{
    const navigate = useNavigate()
    return(
        <>
  <Navbar  />
  <HeroSection />
  <DashedLine />
  <WelcomeSection />
  <LatestInformation />
  <ScrollableCards/>
  <DocumentSection/>
  <BppApplications/>
  <Footer/>
        </>
    )
}

export default Homepage