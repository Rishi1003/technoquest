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
        "title": "JavaScript Deep Dive & Development Setup",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "JavaScript deep dive",
              "ES6+ features",
              "Setup development environment"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Project: Personal Portfolio Website"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "JavaScript concepts review",
              "Development environment troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 2,
        "title": "React Fundamentals",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "React fundamentals",
              "Components and props",
              "Functional components"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Hooks introduction (useState, useEffect)",
              "Mini-Project: Todo List Application"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "React concepts review",
              "Todo list implementation support"
            ]
          }
        ]
      },
      {
        "day": 3,
        "title": "Advanced React & State Management",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Advanced React Hooks",
              "useContext",
              "Custom hooks"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "State management basics",
              "Project: Context-based Theme Switcher"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Hooks implementation review",
              "State management clarifications"
            ]
          }
        ]
      },
      {
        "day": 4,
        "title": "Styling & Responsive Design",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Styling in React",
              "Tailwind CSS",
              "Responsive design principles"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Flexbox and Grid",
              "Project: Responsive Dashboard Layout"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "CSS troubleshooting",
              "Responsive design implementation support"
            ]
          }
        ]
      },
      {
        "day": 5,
        "title": "Project Integration & Deployment",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Project integration day",
              "Code review",
              "Performance optimization techniques"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Deployment of Week 1 projects",
              "Weekend Challenge Brief: Portfolio with React & Tailwind"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Deployment troubleshooting",
              "Week 1 concepts review"
            ]
          }
        ]
      },
      {
        "day": 6,
        "title": "Node.js Fundamentals",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Node.js fundamentals",
              "NPM and package management"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Server-side JavaScript",
              "Project: CLI Task Management Tool"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Node.js concepts review",
              "NPM troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 7,
        "title": "Express.js Basics",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Express.js basics",
              "Routing",
              "Middleware"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Error handling",
              "Project: Express REST API Skeleton"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Express.js implementation support",
              "REST API design clarifications"
            ]
          }
        ]
      },
      {
        "day": 8,
        "title": "MongoDB & Database Design",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "MongoDB setup",
              "Mongoose ODM",
              "Database schema design"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "CRUD operations",
              "Project: User Management System Backend"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "MongoDB troubleshooting",
              "Schema design review"
            ]
          }
        ]
      },
      {
        "day": 9,
        "title": "Authentication & Security",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Authentication with JWT",
              "Password hashing",
              "Authorization middleware"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Security best practices",
              "Project: Secure Login System"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Authentication implementation support",
              "Security concerns discussion"
            ]
          }
        ]
      },
      {
        "day": 10,
        "title": "API Documentation & Integration",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "API documentation",
              "Postman testing"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Deployment of backend services",
              "Integration with frontend",
              "Weekend Challenge Brief: Full-stack Blog Backend"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "API documentation review",
              "Integration troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 11,
        "title": "Next.js Introduction",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Next.js introduction",
              "Pages and routing"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Static and dynamic rendering",
              "Project: Next.js Portfolio Upgrade"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Next.js concepts review",
              "Routing implementation support"
            ]
          }
        ]
      },
      {
        "day": 12,
        "title": "Server-Side Rendering",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Server-side rendering",
              "API routes in Next.js"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Data fetching strategies",
              "Project: Server-Side Rendered Blog"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "SSR implementation support",
              "Data fetching troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 13,
        "title": "Full Stack Integration",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Frontend and backend integration",
              "Connecting React frontend with Express backend"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Axios/Fetch for API calls",
              "Error handling",
              "Project: Full Stack Todo Application"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Integration troubleshooting",
              "Error handling review"
            ]
          }
        ]
      },
      {
        "day": 14,
        "title": "State Management & Deployment",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "State management",
              "Redux toolkit",
              "Context API advanced usage"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Deployment strategies",
              "Vercel/Netlify deployment",
              "Performance optimization"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "State management implementation support",
              "Deployment troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 15,
        "title": "Real-time Features",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "WebSocket integration",
              "Socket.io"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Real-time features",
              "Project: Live Chat Application"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "WebSocket implementation support",
              "Real-time features troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 16,
        "title": "Advanced Authentication",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "OAuth authentication",
              "Social login strategies"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Advanced security",
              "Project: Multi-Auth Login System"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "OAuth implementation support",
              "Security best practices review"
            ]
          }
        ]
      },
      {
        "day": 17,
        "title": "Payment Integration",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Payment gateway integration",
              "Stripe/PayPal APIs"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Secure transaction handling",
              "Project: E-commerce Checkout Flow"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Payment integration troubleshooting",
              "Transaction handling review"
            ]
          }
        ]
      },
      {
        "day": 18,
        "title": "Advanced Form Handling",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Advanced form handling",
              "Validation strategies"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Complex form interactions",
              "Project: Dynamic Form Builder"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Form validation troubleshooting",
              "Complex interactions review"
            ]
          }
        ]
      },
      {
        "day": 19,
        "title": "Microservices & Docker",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Microservices introduction",
              "Docker basics"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Containerization concepts",
              "Project integration and review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Docker implementation support",
              "Microservices architecture review"
            ]
          }
        ]
      },
      {
        "day": 20,
        "title": "Capstone Project Kickoff",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Capstone project kickoff",
              "Team formation",
              "Project planning"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Architecture design",
              "MVP development"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Project planning support",
              "Architecture review"
            ]
          }
        ]
      },
      {
        "day": 21,
        "title": "Capstone Development",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Continued MVP development",
              "Team collaboration"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Code reviews",
              "Progress presentations"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Implementation support",
              "Code review feedback discussion"
            ]
          }
        ]
      },
      {
        "day": 22,
        "title": "Advanced Deployment",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Advanced deployment techniques",
              "CI/CD pipelines"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "GitHub Actions",
              "Performance monitoring"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "CI/CD implementation support",
              "Deployment troubleshooting"
            ]
          }
        ]
      },
      {
        "day": 23,
        "title": "Project Completion",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Final project polishing",
              "Documentation completion"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Deployment preparation",
              "Presentation preparation"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "Final implementation support",
              "Documentation review"
            ]
          }
        ]
      },
      {
        "day": 24,
        "title": "Demo Day & Graduation",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Final project presentations",
              "Code reviews",
              "Deployment of capstone projects"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Career guidance and next steps",
              "Graduation ceremony",
              "Network building"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Final doubt clearing session",
              "Career path discussion",
              "Course completion review"
            ]
          }
        ]
      },
      {
        "day": 25,
        "title": "Capstone Project Guidance Day 1",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Project review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      },
      {
        "day": 26,
        "title": "Capstone Project Guidance Day 2",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Progress review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      },
      {
        "day": 27,
        "title": "Capstone Project Guidance Day 3",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Progress review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      },
      {
        "day": 28,
        "title": "Capstone Project Guidance Day 4",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Progress review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      },
      {
        "day": 29,
        "title": "Capstone Project Guidance Day 5",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Progress review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      },
      {
        "day": 30,
        "title": "Capstone Project Guidance Day 6",
        "hours": [
          {
            "hour": 1,
            "topics": [
              "Final review",
              "Technical guidance"
            ]
          },
          {
            "hour": 2,
            "topics": [
              "Implementation support",
              "Code review"
            ]
          },
          {
            "hour": 3,
            "topics": [
              "Final doubt clearing session",
              "One-on-one mentoring"
            ]
          }
        ]
      }
    ]
  }
};





export default function Statements() {
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
                        <li key={idx}>{topic}</li>
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