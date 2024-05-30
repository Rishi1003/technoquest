import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import dots from "../assets/dots.png"
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai"
import { useState } from "react"
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";


const bootcampSchedule = {
    "bootcamp": {
      "days": [
        {
          "day": 1,
          "title": "Introduction to Programming Mindset",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Welcome and Introduction to the Bootcamp",
                "Basics of Web Development: Frontend, API, Backend",
                "Scope of Full Stack",
                "Understanding the Programmer Mindset: Problem-solving, Logical Thinking, and Debugging Techniques"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Setting Up Development Environments: Node.js, Visual Studio Code",
                "Introduction to Version Control with Git and GitHub",
                "Installation of Git"
              ]
            }
          ]
        },
        {
          "day": 2,
          "title": "Fundamentals of Web Development",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Introduction to HTML and CSS",
                "Activity: Building a Simple Static Web Page"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Introduction to HTML and CSS",
                "Activity: Building a Simple Static Web Page"
              ]
            }
          ]
        },
        {
          "day": 3,
          "title": "Problem-Solving and Debugging",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Document Object Model Manipulation",
                "Essentials of JavaScript: Syntax, Variables, Data Types, Control Structures",
                "Hands-on: Writing Simple JavaScript Programs",
                "Techniques for Problem-Solving: Algorithms and Data Structures",
                "Writing Simple JS Program with Loops, If, If Else, Switch",
                "Searching Largest Number"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Debugging Strategies and Tools: console.log, Breakpoints, Browser Debugging Tools",
                "Hands-on: Debugging JavaScript Code"
              ]
            }
          ]
        },
        {
          "day": 4,
          "title": "NodeJS Basics and Express.js Basics (ToDo Backend)",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "What is NodeJS",
                "Introduction to Express.js: Setting Up an Express Server",
                "What are APIs"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "CRUD Operations",
                "Building RESTful APIs with Express.js",
                "Postman",
                "Hands-on: Creating RESTful Endpoints and Handling Requests"
              ]
            }
          ]
        },
        {
          "day": 5,
          "title": "MongoDB Basics",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "What is Database",
                "SQL vs NoSQL",
                "Introduction to NoSQL and MongoDB",
                "Setting Up MongoDB, Creating Databases, and Collections"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "What is Mongoose",
                "CRUD Operations in MongoDB: Create, Read, Update, Delete",
                "Hands-on: Implementing Basic CRUD Operations in MongoDB"
              ]
            }
          ]
        },
        {
          "day": 6,
          "title": "Advanced MongoDB and Mongoose (Blog Website Backend)",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "ORMs",
                "Using Mongoose for Data Modeling: Schemas and Models",
                "Workshop: Advanced Queries and Aggregations in MongoDB"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Advanced Data Operations with Mongoose",
                "Hands-on: Implementing Complex Queries and Aggregations"
              ]
            }
          ]
        },
        {
          "day": 7,
          "title": "Frontend Development with React",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Introduction to React and JSX",
                "Workshop: Building Basic React Components (Concept)",
                "Managing State, Props, Mapping in React",
                "Hands-on: Implementing Stateful Components in React"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Hands-on: Designing the Pages for Blog Website"
              ]
            }
          ]
        },
        {
          "day": 8,
          "title": "React Router and State Management",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Implementing Routing in React with React Router",
                "Context API"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Workshop: Building Multi-Page Applications for Blog Pages",
                "React 19 Overview"
              ]
            }
          ]
        },
        {
          "day": 9,
          "title": "Frontend - Backend communication",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Integrating React with Express: Fetching Data from Backend APIs",
                "Workshop: Displaying Backend Data in React Components"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Mini Project Kickoff: Setting Up Project Repositories and Planning"
              ]
            }
          ]
        },
        {
          "day": 10,
          "title": "Authentication and Authorization",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Basics of Authentication: Implementing JWT for User Authentication",
                "Workshop: Securing API Endpoints with JWT"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "User Authorization: Role-Based Access Control",
                "Hands-on: Implementing Authorization Logic in Backend APIs"
              ]
            }
          ]
        },
        {
          "day": 11,
          "title": "Testing and Debugging",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Writing Unit and Integration Tests with Jest and Mocha",
                "Workshop: Test-Driven Development (TDD) Exercises"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Debugging Techniques for Node.js and React Applications",
                "Hands-on: Debugging and Testing Codebase"
              ]
            }
          ]
        },
        {
          "day": 12,
          "title": "Deployment and Final Project Planning",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Deployment Strategies: Heroku, Vercel, and CI/CD Pipelines",
                "Workshop: Setting Up Continuous Integration and Deployment (CI/CD)"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Final Project Kickoff: Defining Scope, Requirements, and Wireframes"
              ]
            }
          ]
        },
        {
          "day": 13,
          "title": "Final Project Development",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Project Work: Developing and Integrating Features",
                "Mentor-Led Code Reviews and Guidance"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Project Work: Refactoring, Bug Fixes, and Polishing",
                "Group Activity: Peer Feedback and Collaboration"
              ]
            }
          ]
        },
        {
          "day": 14,
          "title": "Final Touches and Demo Day",
          "hours": [
            {
              "hour": 1,
              "topics": [
                "Industry Expert Talk",
                "Next Steps",
                "Career Guidance",
                "Finalizing Projects, Preparing for Demo Day Presentations",
                "Mentorship for Final Touches and Feedback"
              ]
            },
            {
              "hour": 2,
              "topics": [
                "Demo Day: Participants Showcase Final Projects",
                "Closing Ceremony: Feedback Session, Reflections, and Graduation"
              ]
            }
          ]
        }
      ]
    }
  };





export default function Statements(){
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
  
    const fadeIn = (element) => {
      gsap.to(element, 1, {
        opacity: .9,
        y: -40,
        ease: "power1.out",
        stagger: {
          amount: .1,
        },
      });
    };
  
    const fadeOut = (element) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: "power1.out",
      });
    };
  
    intersection && !intersection.isIntersecting ? fadeOut(sectionRef.current) : fadeIn(sectionRef.current);
    const [show, setShow] = useState(1);
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (day) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [day]: !prevState[day],
        }));
    };
    
    return (
        <div id="program-details" className="relative w-[95vw] bg-cover plus-poster">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4" />
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4" />
            <img src={topright} alt="border" className="absolute top-4 right-4" />
            <img src={topleft} alt="border" className="absolute top-4 left-4" />
            <img src={dots} alt="border" className="absolute top-20 left-4" />

            <div className="flex w-full px-10 flex-col gap-5 pb-10 pt-12 mt-10 lg:pb-20 lg:pt-16" ref={sectionRef}>
                <h1 className="text-white select-none text-center mb-8 text-3xl">What you'll learn</h1>
                {bootcampSchedule.bootcamp.days.map((item) => (
                    <div key={item.day}>
                        <div onClick={() => toggleDetails(item.day)} className="px-2 select-none border-x-2 border-green-400 cursor-pointer">
                            <div className="text-black mb-5 font-semibold flex items-center justify-between px-4 bg-green-400 py-1 text-xl">
                                Day: {item.day} {item.title} {showDetails[item.day] ? <AiOutlineDown /> : <AiOutlineRight />}
                            </div>
                        </div>
                        {showDetails[item.day] && (
                            <div className="flex md:px-10 flex-col gap-6 text-lg text-white">
                                {item.hours.map((items, index) => (
                                    <div key={index}>
                                        <p>Hour: {items.hour}</p>
                                        <ul className="list-disc pl-5" >
                                            {items.topics.map((topic, idx) => (
                                                <li  key={idx}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}