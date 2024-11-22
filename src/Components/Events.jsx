import bottomleft from "../assets/leftbottom.0983230c.png";
import bottomright from "../assets/rightBottom.f55e2fe4.png";
import topright from "../assets/rightTop.1e802db8.png";
import topleft from "../assets/leftTop.c7fe8e9a.png";
import dots from "../assets/dots.png";
import { gsap } from "gsap";
import { useIntersection, useScratch } from "react-use";
import { useRef, useState } from "react";

export default function Events() {
  const [dayButton, setDay] = useState(1);
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -40,
      ease: "power1.out",
      stagger: {
        amount: 0.3,
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

  return (
    <>
      <div className="relative w-[95vw] plus-poster bg-cover" id="events">
        <img src={bottomleft} alt="border" className="absolute bottom-4 left-4" />
        <img src={bottomright} alt="border" className="absolute bottom-4 right-4" />
        <img src={topright} alt="border" className="absolute top-4 right-4" />
        <img src={topleft} alt="border" className="absolute top-4 left-4" />
        <img src={dots} alt="border" className="absolute top-20 left-4" />

        <div
          className="flex py-20 w-full flex-col md:flex-row justify-around gap-10 md:gap-4 mt-5 lg:px-12 fadeIn"
          ref={sectionRef}
        >
          <h1 className="text-white text-center text-6xl md:hidden">Bootcamp Syllabus</h1>
          <div className="flex max-w-[80%] overflow-x-auto gap-3 md:gap-8 md:flex-col self-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={
                  dayButton == index + 1
                    ? "border-2 max-w-max rounded-lg p-1 border-green-400"
                    : ""
                }
              >
                <button
                  onClick={() => setDay(index + 1)}
                  className={`text-white text-3xl md:text-6xl max-w-max bg-green-400 px-3 py-2 rounded-md ${index > 0 ? "" : ""
                    }`}
                >
                  Week {index + 1}
                </button>
              </div>
            ))}
          </div>

          {/* Week 1 */}
          <div
            className={
              dayButton == 1
                ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center"
                : "hidden"
            }
          >
            <h1 className="mb-8 text-3xl md:text-5xl">
              <span className="text-green-400">Week 1: </span>Foundations & Frontend Basics
            </h1>
            <ul className="text-lg break-words">
              <li className="mb-3">
                <strong className="text-green-400">Monday:</strong> JavaScript deep dive, ES6+ features, development environment setup, project: Personal Portfolio Website.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Tuesday:</strong> React fundamentals, functional components, hooks (useState, useEffect), project: Todo List Application.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Wednesday:</strong> Advanced React Hooks, useContext, custom hooks, project: Context-based Theme Switcher.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Thursday:</strong> Tailwind CSS, responsive design, project: Responsive Dashboard Layout.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Friday:</strong> Integration day, code review, performance optimization, deployment of Week 1 projects.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Weekend Challenge:</strong> Build a responsive personal portfolio using React and Tailwind CSS.
              </li>
            </ul>
          </div>

          {/* Week 2 */}
          <div
            className={
              dayButton == 2
                ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center"
                : "hidden"
            }
          >
            <h1 className="mb-8 text-3xl md:text-5xl">
              <span className="text-green-400">Week 2: </span>Backend Development & API Creation
            </h1>
            <ul className="text-lg break-words">
              <li className="mb-3">
                <strong className="text-green-400">Monday:</strong> Node.js fundamentals, NPM/package management, project: CLI Task Management Tool.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Tuesday:</strong> Express.js basics, routing, middleware, error handling, project: Express REST API Skeleton.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Wednesday:</strong> MongoDB setup, Mongoose ODM, CRUD operations, project: User Management System Backend.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Thursday:</strong> Authentication with JWT, password hashing, project: Secure Login System.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Friday:</strong> API documentation, Postman testing, deployment of backend services, integration with frontend.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Weekend Challenge:</strong> Create a full-stack blog backend with user authentication, post creation, and retrieval endpoints.
              </li>
            </ul>
          </div>

          {/* Week 3 */}
          <div
            className={
              dayButton == 3
                ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center"
                : "hidden"
            }
          >
            <h1 className="mb-8 text-3xl md:text-5xl">
              <span className="text-green-400">Week 3: </span>Full Stack Integration & Next.js
            </h1>
            <ul className="text-lg break-words">
              <li className="mb-3">
                <strong className="text-green-400">Monday:</strong> Next.js introduction, pages and routing, static/dynamic rendering, project: Next.js Portfolio Upgrade.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Tuesday:</strong> Server-side rendering, API routes, data fetching strategies, project: Server-Side Rendered Blog.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Wednesday:</strong> Frontend-backend integration, Axios/Fetch API calls, project: Full Stack Todo Application.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Thursday:</strong> State management with Redux toolkit, project: Global State Management Dashboard.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Friday:</strong> Deployment strategies, performance optimization, project presentations.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Weekend Challenge:</strong> Build an e-commerce product listing and detail page with server-side rendering.
              </li>
            </ul>
          </div>

          {/* Week 4 */}
          <div
            className={
              dayButton == 4
                ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center"
                : "hidden"
            }
          >
            <h1 className="mb-8 text-3xl md:text-5xl">
              <span className="text-green-400">Week 4: </span>Advanced Features & Real-World Projects
            </h1>
            <ul className="text-lg break-words">
              <li className="mb-3">
                <strong className="text-green-400">Monday:</strong> Real-time features with WebSockets, project: Live Chat Application.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Tuesday:</strong> OAuth and advanced authentication, project: Multi-Auth Login System.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Wednesday:</strong> Payment gateway integration, project: E-commerce Checkout Flow.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Thursday:</strong> Advanced form handling, project: Dynamic Form Builder.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Friday:</strong> Microservices and Docker basics, project review.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Weekend Challenge:</strong> Develop a full-featured marketplace with vendor support.
              </li>
            </ul>
          </div>

          {/* Week 5 */}
          <div
            className={
              dayButton == 5
                ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center"
                : "hidden"
            }
          >
            <h1 className="mb-8 text-3xl md:text-5xl">
              <span className="text-green-400">Week 5: </span>Capstone Project & Deployment
            </h1>
            <ul className="text-lg break-words">
              <li className="mb-3">
                <strong className="text-green-400">Monday-Wednesday:</strong> Team capstone project kickoff, planning, architecture design, MVP development.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Thursday:</strong> Advanced deployment, CI/CD pipelines, GitHub Actions, performance monitoring.
              </li>
              <li className="mb-3">
                <strong className="text-green-400">Friday:</strong> Final project presentations, code reviews, career guidance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}
