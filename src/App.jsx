import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar.jsx"
import Intro from './Components/Intro.jsx'
import PrizeSection from "./Components/PrizeSection.jsx"
import Steps from "./Components/Steps.jsx"
import Tracks from "./Components/Tracks.jsx"
import Choose from "./Components/Choose.jsx"
import Statements from "./Components/Statements.jsx"
import Events from "./Components/Events.jsx"
import Footer from "./Components/Footer.jsx"
import Stack from "./Components/Stack.jsx"


export default function App() {
  return (

    <main className="bg-black overflow-x-hidden flex gap-2 flex-col items-center">
      <Navbar />
      <Hero />
      <Stack />
      <>
        <div className="relative w-[95vw] plus-poster bg-cover py-20" id="devops-tools">
          <h1 className="text-white text-center text-6xl mb-12">DevOps and Deployment Tools</h1>
          <div className="flex justify-around items-center flex-wrap gap-10 md:gap-20 lg:gap-32">
            {/* Docker */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
                alt="Docker Icon"
                className="h-20"
              />
              <h2 className="text-white text-2xl mt-4">Docker</h2>
            </div>

            {/* AWS Cloud */}
            <div className="flex flex-col items-center">
              <img
                src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                alt="AWS Cloud Icon"
                className=" h-20"
              />
              <h2 className="text-white text-2xl mt-4">AWS Cloud</h2>
            </div>

            {/* CI/CD */}
            <div className="flex flex-col items-center">
              <img
                src="https://media.licdn.com/dms/image/C4D12AQHEozYv3E5rdA/article-cover_image-shrink_600_2000/0/1612876678427?e=2147483647&v=beta&t=2fLzzpCTVay31sHhzOEZpVwyfJvxwwjkv-LOpZ9P8r8"
                alt="CI/CD Icon"
                className="w-25 h-20"
              />
              <h2 className="text-white text-2xl mt-4">CI/CD</h2>
            </div>

            {/* Microservices */}
            <div className="flex flex-col items-center">
              <img
                src="https://solace.com/wp-content/uploads/2020/05/microservices.png"
                alt="Microservices Icon"
                className="w-20 h-20"
              />
              <h2 className="text-white text-2xl mt-4">Microservices</h2>
            </div>
          </div>
        </div>
      </>

      <Events />
      <Steps />
      <Tracks />
      <Statements />
      <Footer />
    </main>

  )
}