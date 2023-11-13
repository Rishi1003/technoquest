import Hero from "./Components/Hero"
import Navbar from "./components/Navbar"
import Intro from './Components/Intro'
import Steps from "./Components/Steps"

export default function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Intro/> 
      <Steps/>
    </main>
  )
}