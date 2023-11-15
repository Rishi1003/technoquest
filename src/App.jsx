import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar.jsx"
import Intro from './Components/Intro.jsx'
import PrizeSection from "./Components/PrizeSection.jsx"
import Steps from "./Components/Steps.jsx"
import Tracks from "./Components/Tracks.jsx"
import Choose from "./Components/Choose.jsx"
import Statements from "./Components/Statements.jsx"
import Events from "./Components/Events.jsx"


export default function App() {
  return (
    
    <main className="bg-black overflow-x-hidden flex gap-2 flex-col items-center">
      <Navbar/>
      <Hero/>
      <Intro/> 
      <PrizeSection/>
      <Events/>
      <div id="tracks"><Choose/></div>
      <Tracks/>
      <Steps/>
      <Statements/>
    </main>
    
  )
}