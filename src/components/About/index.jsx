import { IoLocationSharp } from "react-icons/io5";
import SkillSelector from "../SkillSelector";
import SkillOne from "../SkillOne";
import SkillTwo from "../SkillTwo";
import SkillThree from "../SkillThree/idenx";
import { useEffect, useState } from "react";

export default function Abaut() {
  const [stateSelector, setStateSelector] = useState(0);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(document.querySelectorAll(".skillSec"));
  }, []);

  useEffect(() => {
    sections[stateSelector]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [stateSelector]);

  return (
    <div id="aboutPage" className=" w-full h-screen">
      <div className=" pagetoUp w-full flex h-full py-6 px-20">
        <div className="w-4/12 flex flex-col">
          <div className="border-b-4 border-gray-600 w-fit px-2">
            <h2 className="aboutTittle Poppins w-fit text-4xl mt-12 border-b-4 border-orange-400 px-4 py-1">
              About
            </h2>
          </div>
          <div className="picInfo Poppins h-full w-full flex flex-col items-center border-r-2 pr-7 mt-10">
            <div
              style={{
                backgroundImage: "url('./foto2.jpg')",
                backgroundSize: "100% 140%",
                backgroundPosition: "0 -20px",
              }}
              className="rounded-full w-60 h-60"
            ></div>
            <p className="text-center mt-2 text-lg">Jose Suchmolin J.</p>
            <p className="text-justify mt-2">
              Ingeniero en sistema, autodidacta, orientado al desarrollo de
              software, especializado en el diseño y desarrollo Front-end
            </p>
            <p className="flex items-center w-full mt-4">
              <span className="text-red-500 mr-2">
                <IoLocationSharp />
              </span>
              Caracas, Venezuela
            </p>
          </div>
        </div>
        <div className="boxSkills relative w-8/12 text-lg flex items-center justify-center">
          <div className="flex overflow-hidden">
            <SkillOne />
            <SkillTwo />
            <SkillThree />
          </div>
          <SkillSelector
            stateSelector={stateSelector}
            setStateSelector={setStateSelector}
            max={sections.length - 1}
          />
        </div>
      </div>
    </div>
  );
}
