import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function SkillSelector(props) {
  const { stateSelector, setStateSelector, max } = props;
  const newSelector = (direction) => {
    if (direction === "next") {
      if (stateSelector === max) {
        setStateSelector(0);
      } else {
        setStateSelector(stateSelector + 1);
      }
    }
    if (direction === "prev") {
      if (stateSelector === 0) {
        setStateSelector(max);
      } else {
        setStateSelector(stateSelector - 1);
      }
    }
  };

  return (
    <div className="absolute bottom-4 flex gap-2 items-center">
      <span
        onClick={() => newSelector("prev")}
        className="text-orange-500 h-5 w-6 cursor-pointer hover:text-2xl ease-in duration-300 flex items-center "
      >
        <IoIosArrowBack />
      </span>
      <ul className="ulSkillSelector flex gap-3 items-center justify-center min-h-full w-16 h-5">
        <li
          onClick={() => setStateSelector(0)}
          className={
            stateSelector === 0
              ? "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300 bg-orange-500"
              : "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300"
          }
        >
          {" "}
        </li>
        <li
          onClick={() => setStateSelector(1)}
          className={
            stateSelector === 1
              ? "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300 bg-orange-500"
              : "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300"
          }
        >
          {" "}
        </li>
        <li
          onClick={() => setStateSelector(2)}
          className={
            stateSelector === 2
              ? "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300 bg-orange-500"
              : "w-1 h-1 cursor-pointer rounded-full ring-2 ring-orange-500 ease-in duration-300"
          }
        >
          {" "}
        </li>
      </ul>
      <span
        onClick={() => newSelector("next")}
        className="text-orange-500 h-5 w-6 cursor-pointer hover:text-2xl ease-in duration-300 flex items-center "
      >
        <IoIosArrowForward />
      </span>
    </div>
  );
}
