import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
export default function Choose(){
    return<>
        <div className="relative w-[95vw] h-max ">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
            <img src={topright} alt="border" className="absolute top-4 right-4"/>
            <img src={topleft} alt="border" className="absolute top-4 left-4"/>

            <div className="flex h-full w-full flex-col justify-center text-center gap-4 py-16 lg:py-20 lg:px-24">
                <h1 className="text-5xl text-green-400">Choose Your Track</h1>
                <p className="text-white w-[80vw] text-lg m-auto">Whether you're a Builder eager to tackle specific challenges or an Explorer looking to broaden your knowledge, both tracks offer unique pathways to success. Choose your track and contribute to the vibrant ecosystem of innovation, collaboration, and problem-solving at our hackathon!
                </p>
            </div>


        </div>
    </>
}