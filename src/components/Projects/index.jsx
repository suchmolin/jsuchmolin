import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./index.css";

export default function Projects() {
  const [state, setState] = useState({ p1: false, p2: false, p3: false });
  const changeSelected = (selected) => {
    const projects = document.querySelectorAll(".singleProject");
    projects.forEach((pro, i) => {
      if (i === selected) {
        if (pro.classList.contains("unSelectedProject")) {
          pro.classList.remove("unSelectedProject");
        }
        pro.classList.add("selectedProject");
        console.log({ pro });
        selected === 0
          ? setState({ p1: true, p2: false, p3: false })
          : selected === 1
          ? setState({ p1: false, p2: true, p3: false })
          : setState({ p1: false, p2: false, p3: true });
      } else {
        if (pro.classList.contains("selectedProject")) {
          pro.classList.remove("selectedProject");
        }
        pro.classList.add("unSelectedProject");
      }
    });
    setTimeout(() => {
      const top = projects[selected].getBoundingClientRect().top;
      window.scrollTo({ top: top + window.pageYOffset - 100 });
    }, 350);
  };

  useEffect(() => {
    console.log(state.p1);
  }, [state]);
  return (
    <div id="projectsPage" className="">
      <div id="dividerprojects" className="divider relative mt-32 h-32">
        <div className="skewed"></div>
        <div className="absolute w-full flex justify-center -mt-20">
          <div className="border-b-4 border-gray-600 w-fit px-2 mt-3">
            <h2 className="projectsTitle Poppins w-fit text-6xl mt-12 border-b-4 border-blue-500 px-4 py-1">
              Projects
            </h2>
          </div>
        </div>
      </div>
      <div className="projects w-full flex gap-10 justify-center pb-20 px-10 flex-wrap">
        <div
          onClick={() => changeSelected(0)}
          className="singleProject unSelectedProject min-w-3/12 min-h-72 rounded-lg bg-white p-5 flex shadow-2xl"
        >
          <div className="w-full">
            <img src="./project1.png" alt="" className="imgProject" />
            <div className="iconsSkills w-full flex gap-1 justify-center items-center mt-4  text-3xl">
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-tailwindcss-original colored"></i>
              <img
                width={28}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              />
            </div>
          </div>
          <div className="cajaSubtitle">
            <div className="subtitleProject border-b-4 border-gray-600 w-fit h-fit mt-7 px-2">
              <h2 className="Poppins w-fit leading-3 text-xl border-b-4 border-blue-500 py-1 px-1">
                jsuchmolin.site
              </h2>
            </div>
            {state.p1 && (
              <div className="hideOnSmall">
                <p className="text-justify mt-3">
                  This is a personal project, whose objective is to show my
                  skills as a front-end designer, personal and contact
                  information. This project was made with: HTML, CSS,
                  JavaScript, React JS,Tailwind CSS, Vite.js
                </p>
                <div className="w-full flex gap-5 justify-center items-center mt-10">
                  <a
                    href="https://jsuchmolin.site"
                    target="_blank"
                    className="py-2 px-3 bg-blue-400 rounded-sm cursor-pointer hover:bg-blue-500 flex gap-2 items-center shadow-lg"
                  >
                    Visit Page <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/suchmolin/jsuchmolin"
                    target="_blank"
                    className="py-2 px-3 bg-blue-400 rounded-sm cursor-pointer hover:bg-blue-500 flex gap-2 items-center shadow-lg"
                  >
                    Repository <FaGithub />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => changeSelected(1)}
          className="singleProject unSelectedProject min-w-3/12 min-h-72 rounded-lg bg-white p-5 flex shadow-2xl"
        >
          <div className="w-full">
            <img src="./project2.png" alt="" className="imgProject" />
            <div className="iconsSkills w-full flex gap-1 justify-center items-center mt-4  text-3xl">
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-tailwindcss-original colored"></i>
              <img
                width={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              />
            </div>
          </div>
          <div className="cajaSubtitle">
            <div className="subtitleProject border-b-4 border-gray-600 w-fit h-fit mt-3 px-2">
              <h2 className="Poppins w-fit leading-3 text-xl border-b-4 border-blue-500 py-1 px-1">
                Amazon Layout
              </h2>
            </div>
            {state.p2 && (
              <div className="hideOnSmall">
                <p className="text-justify mt-3">
                  This is a personal project, which demonstrates my skill in the
                  use of TailwindCSS, where I replicate the structure and
                  operation of the main page of amazon.com, in the same way
                  TypeScript was used for the registration and login operation
                </p>
                <div className="w-full flex gap-5 justify-center items-center mt-10">
                  <a
                    href="https://github.com/suchmolin/AmazonLayout"
                    target="_blank"
                    className="py-2 px-3 bg-blue-400 rounded-sm cursor-pointer hover:bg-blue-500 flex gap-2 items-center shadow-lg"
                  >
                    Repository <FaGithub />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => changeSelected(2)}
          className="singleProject unSelectedProject min-w-3/12 min-h-72 rounded-lg  bg-white p-5 flex shadow-2xl"
        >
          <div className="w-full">
            <img src="./project3.png" alt="" className="imgProject" />
            <div className="iconsSkills w-full flex gap-1 justify-center items-center mt-4  text-3xl">
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-tailwindcss-original colored"></i>
              <img
                width={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              />
            </div>
          </div>
          <div className="cajaSubtitle">
            <div className="subtitleProject border-b-4 border-gray-600 w-fit h-fit mt-3 px-2">
              <h2 className="Poppins w-fit leading-3 text-xl border-b-4 border-blue-500 py-1 px-1">
                sistcom.site
              </h2>
            </div>
            {state.p3 && (
              <div className="hideOnSmall">
                <p className="text-justify mt-3">
                  Sistcom.site is a minimasses control system where events are
                  managed, created, scheduled and stored. This site is made with
                  HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, Firebase.
                  To test its operation I suggest using:
                </p>
                <p>test email: test@test.com</p>
                <p>test pasword: test123</p>
                <div className="w-full flex gap-5 justify-center items-center mt-10">
                  <a
                    href="https://sistcom.site"
                    target="_blank"
                    className="py-2 px-3 bg-blue-400 rounded-sm cursor-pointer hover:bg-blue-500 flex gap-2 items-center shadow-lg"
                  >
                    Visit Page <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/suchmolin/sistcom"
                    target="_bank"
                    className="py-2 px-3 bg-blue-400 rounded-sm cursor-pointer hover:bg-blue-500 flex gap-2 items-center shadow-lg"
                  >
                    Repository <FaGithub />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
