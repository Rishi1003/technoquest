import Hero from "./Components/Hero"
import Navbar from "./components/Navbar"
import Intro from './Components/Intro'
import PrizeSection from "./Components/PrizeSection"
import Steps from "./Components/Steps"
import Tracks from "./Components/Tracks"
import Choose from "./Components/Choose"
import Statements from "./Components/Statements"


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