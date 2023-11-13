import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import dots from "../assets/dots.png"
export default function Intro(){
    return<>
        <div className="relative w-[95vw] h-max md:h-screen bg-[url('./src/assets/bg.png')] bg-cover">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
            <img src={topright} alt="border" className="absolute top-4 right-4"/>
            <img src={topleft} alt="border" className="absolute top-4 left-4"/>
            <img src={dots} alt="border" className="absolute top-20 left-4"/>

            <div className="flex h-full w-full px-20 flex-col md:flex-row gap-4 py-10 lg:py-20 lg:px-24">
                
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Explore the Fest and Find Opportunities</h1>
                        <p className="text-white lg:text-xl">The Explorer track is tailored for those curious minds looking to discover and learn. Explore the fest, engage in workshops, and uncover opportunities in various domains. While not bound to a specific problem statement, Explorers have the flexibility to dive into emerging technologies, trends, and networking opportunities, broadening their horizons throughout the hackathon.
                        <br/>
                        <div className="mt-2"><button className="text-green-400 mr-1 hover:scale-95">Check Out</button> Our Two Day Event List</div>
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 self-end">
                        <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Build and Showcase Your Ideas</h1>
                        <p className="text-white lg:text-xl">The Builder track is perfect for those ready to roll up their sleeves and transform ideas into reality. Choose from our curated list of problem statements and embark on a journey of hands-on creation. Develop prototypes, showcase your coding skills, and demonstrate how your solutions can make a real-world impact.
                        <br/>
                        <div className="mt-2"><button className="text-green-400 mr-1 hover:scale-95">Check Out</button> Our Two Day Event List</div>
                        </p>
                    </div>
                
            </div>


        </div>
    </>
}