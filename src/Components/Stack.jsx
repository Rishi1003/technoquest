import React from 'react'

function Stack() {
    return (
        <>
            <div className="relative w-[95vw] plus-poster bg-cover py-20" id="tech-stack">
                <h1 className="text-white text-center text-6xl mb-10">Tech Stack</h1>
                <div className="flex justify-around items-center flex-wrap">
                    {/* MongoDB */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://www.mongodb.com/assets/images/global/favicon.ico"
                            alt="MongoDB Icon"
                            className="w-20 h-20"
                        />
                        <h2 className="text-white text-2xl mt-4">MongoDB</h2>
                    </div>

                    {/* Express */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                            alt="Express Icon"
                            className="w-20 h-20 bg-white rounded-full p-2"
                        />
                        <h2 className="text-white text-2xl mt-4">Express.js</h2>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React Icon"
                            className="w-20 h-20"
                        />
                        <h2 className="text-white text-2xl mt-4">React</h2>
                    </div>

                    {/* Node.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                            alt="Node.js Icon"
                            className="w-20 h-20"
                        />
                        <h2 className="text-white text-2xl mt-4">Node.js</h2>
                    </div>

                    {/* Next.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
                            alt="Next.js Icon"
                            className="w-20 h-20"
                        />
                        <h2 className="text-white text-2xl mt-4">Next.js</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stack