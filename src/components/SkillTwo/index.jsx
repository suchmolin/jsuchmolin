export default function SkillTwo() {
  return (
    <div
      id="SkillSecTwo"
      className="skillSec flex flex-col items-center -ml-20 mr-20 lg:pt-16"
    >
      <div className="w-12/12">
        <div className="flex w-full justify-center mt-10">
          <div className="border-b-4 border-gray-600 w-fit px-2">
            <h2 className="aboutTittle Poppins leading-5 w-fit text-4xl mt-12 border-b-4 border-orange-400 px-4 py-1">
              Extra
            </h2>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-5 mt-10 min-h-40  px-20">
          <div className="flex gap-5">
            <div className="imgCont">
              <img src="./img/vitelogo.png" alt="" />
            </div>
            <div className="imgContHzt">
              <img src="./img/nextjslogo.png" alt="" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="imgCont">
              <img src="./img/firebaselogo.png" alt="" />
            </div>
            <div className="imgCont">
              <img src="./img/sqllogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5 mt-5 lg:mt-16">
        <div className="border-b-4 border-gray-600 w-fit px-2 h-9">
          <h2 className="Poppins leading-5 w-fit text-2xl border-b-4 border-orange-400 px-2 py-1">
            Lenguages
          </h2>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <img style={{ width: "30px" }} src="./img/spanishflag.png" alt="" />

            <p className="text-xs  leading-3">Spanish</p>
            <p className="extraSmall  leading-3">{"(NATIVE)"}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img style={{ width: "30px" }} src="./img/usaflag.png" alt="" />

            <p className="text-xs leading-3">English</p>
            <p className="extraSmall  leading-3">{"(INTERMEDIATE)"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
