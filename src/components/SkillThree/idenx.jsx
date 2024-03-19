export default function SkillThree() {
  return (
    <div
      id="SkillSecThree"
      className="skillSec flex flex-col items-center w-full px-20 pt-16 md:pt-0"
    >
      <div className="w-12/12">
        <div className="flex w-full justify-center mt-10">
          <div className="border-b-4 border-gray-600 w-fit px-2">
            <h2 className="aboutTittle Poppins leading-5 w-fit text-4xl mt-12 border-b-4 border-orange-400 px-4 py-1">
              Contacts
            </h2>
          </div>
        </div>
        <div className=" flex gap-7 mt-10 min-h-40 px-32 md:px-20">
          <div className="imgCont">
            <a href="https://github.com/suchmolin" target="_blank">
              <img src="./img/ghlogo.png" alt="ghlogo" />
            </a>
          </div>
          <div className="imgCont">
            <a
              href="https://www.linkedin.com/in/josesuchmolin/"
              target="_blank"
            >
              <img src="./img/linkedinlogo.png" alt="linkedinlogo" />
            </a>
          </div>
          <div className="imgCont hidden md:block">
            <a href="https://www.facebook.com/suchmolinjose/" target="_blank">
              <img src="./img/fblogo.png" alt="fblogo" />
            </a>
          </div>
        </div>
        <div className=" flex gap-10 h-28  mt-10 px-20  items-center justify-center">
          <div className="imgCont">
            <a href="mailto:suchmolin11@gmail.com" target="_blank">
              <img src="./img/gmaillogo.png" alt="gmaillogo" />
            </a>
          </div>
          <div style={{ width: "200px" }} className="imgCont">
            <a href="https://www.freelancer.es/u/suchmolin11" target="_blank">
              <img src="./img/freelancerlogo.png" alt="freelancerlogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5"></div>
    </div>
  );
}
