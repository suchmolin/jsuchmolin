export default function SkillOne() {
  return (
    <div
      id="SkillSecOne"
      className="skillSec flex w-full min-h-full items-center mr-40"
    >
      <div className="w-9/12">
        <div className="flex gap-5  mt-10 px-20 items-center justify-center">
          <div className="imgCont">
            <img src="./htmllogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img src="./csslogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img src="./jslogo.png" alt="" />
          </div>
        </div>
        <div className=" flex gap-5  mt-10 px-20  items-center justify-center">
          <div className="imgCont">
            <img src="./tslogo.png" alt="" />
          </div>
          <div className="imgCont">
            <img style={{ height: "135px" }} src="./reactlogo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-3/12 h-3/4 border-l-4 border-gray-600 py-4 ">
        <div className="border-l-4 border-orange-400 w-full h-full py-6">
          <h2 className="aboutTittle rotate-90 ShadowsIntoLight pl-14 -ml-6">
            Skills
          </h2>
        </div>
      </div>
    </div>
  );
}
