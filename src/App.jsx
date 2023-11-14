import Hero from "./Components/Hero"
import Navbar from "./components/Navbar.jsx"
import Intro from './Components/Intro.jsx'
import PrizeSection from "./Components/PrizeSection.jsx"
import Steps from "./Components/Steps.jsx"
import Tracks from "./Components/Tracks.jsx"
import Choose from "./Components/Choose.jsx"
import Statements from "./Components/Statements.jsx"


export default function App() {
  return (
    <main className="bg-black overflow-x-hidden flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <Intro/> 
      <PrizeSection/>
      <Steps/>
      <Choose/>
      <Tracks/>
      <Steps/>
      <Statements/>
    </main>
  )
}