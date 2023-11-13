import Hero from "./Components/Hero"
import Navbar from "./components/Navbar"
import Intro from './Components/Intro'
import Steps from "./Components/Steps"
import Tracks from "./Components/Tracks"
import Choose from "./Components/Choose"

export default function App() {
  return (
    <main className="bg-black overflow-x-hidden flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <Intro/> 
      <Steps/>
      <Choose/>
      <Tracks/>
    </main>
  )
}