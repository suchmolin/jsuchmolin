import { useState } from "react";
export default function NavBar() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "navBlack fixed z-30 w-full flex justify-center  px-4"
          : "nav fixed z-30 w-full flex bg-transparent  px-4"
      }
    >
      {color ? (
        <img src="./logoblackorange.png" width={48} alt="" />
      ) : (
        <img src="./logo.png" width={48} alt="" />
      )}
      <nav className="m-auto">
        <ul
          className={
            color
              ? " w-full flex text-white text-sm py-1 px-4"
              : " w-full flex text-white text-sm py-1 px-4  border-b-2"
          }
        >
          <button
            onClick={() => {
              document.getElementById("homePage").scrollIntoView();
            }}
          >
            <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
              Home
            </li>
          </button>
          <button
            onClick={() => {
              document.getElementById("aboutPage").scrollIntoView();
            }}
          >
            <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
              About
            </li>
          </button>
          <button
            onClick={() => {
              document.getElementById("projectsPage").scrollIntoView();
            }}
          >
            <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
              Projects
            </li>
          </button>
          <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
