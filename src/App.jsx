import Hero from "./Components/Hero"
import Navbar from "./components/Navbar"
import Intro from './Components/Intro'

export default function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Intro/> 
    </main>
  )
}