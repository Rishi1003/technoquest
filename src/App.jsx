import Hero from "./Components/Hero"
import Navbar from "./components/Navbar"
import Intro from './Components/Intro'
import PrizeSection from "./Components/PrizeSection"

export default function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Intro/> 
      <PrizeSection/>
    </main>
  )
}