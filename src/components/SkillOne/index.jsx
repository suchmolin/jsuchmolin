export default function SkillOne() {
  return (
    <div
      id="SkillSecOne"
      className="skillSec flex flex-col lg:flex-row w-full min-h-full items-center lg:mr-40 pt-16 lg:pt-0"
    >
      <div className="flex w-full justify-center lg:hidden mb-10">
        <div className="border-b-4 border-gray-600 w-fit px-2 ">
          <h2 className="aboutTittle Poppins leading-5 w-fit text-4xl mt-12 border-b-4 border-orange-400 px-4 py-1">
            Skills
          </h2>
        </div>
      </div>
      <div className="w-10/12 lg:w-12/12 lg:w-9/12">
        <div className="flex gap-5  mt-10  lg:px-20 items-center justify-center">
          <div className="imgCont">
            <img src="./img/htmllogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img src="./img/csslogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img src="./img/jslogo.png" alt="" />
          </div>
        </div>
        <div className=" flex gap-5 mt-10 lg:px-20  items-center justify-center">
          <div className="imgCont">
            <img src="./img/tslogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img style={{ height: "135px" }} src="./img/reactlogo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-0 lg:w-3/12 h-3/4 border-l-4 border-gray-600 py-4 ">
        <div className="border-l-4 border-orange-400 w-full h-full py-6">
          <h2 className="aboutTittle rotate-90 ShadowsIntoLight pl-14 -ml-6">
            Skills
          </h2>
        </div>
      </div>
    </div>
  );
}
