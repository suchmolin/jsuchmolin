import { useState } from "react";
import { MdMenu } from "react-icons/md";
export default function NavBar() {
  const [color, setColor] = useState(false);
  const [imgColor, setImgColor] = useState(0);

  const changeColor = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrollY > 1300) {
      setImgColor(2);
    } else {
      setImgColor(1);
    }
  };
  window.addEventListener("scroll", changeColor);

  const toggleMenu = () => {
    const menuTag = document.getElementById("menuList");

    if (menuTag.classList.contains("hidden")) {
      menuTag.classList.remove("hidden");
    } else {
      menuTag.classList.add("hidden");
    }
  };
  return (
    <div
      className={
        color
          ? "navBlack fixed z-30 w-full flex justify-center  px-4"
          : "nav fixed z-30 w-full flex bg-transparent  px-4"
      }
    >
      {!color ? (
        <img src="./img/logo.png" width={48} alt="" />
      ) : imgColor === 1 ? (
        <img src="./img/logoblackorange.png" width={48} alt="" />
      ) : (
        <img src="./img/logoblackblue.png" width={48} alt="" />
      )}
      <nav className="m-auto">
        <ul
          id="menuList"
          className={
            color
              ? " w-full flex text-white text-sm py-1 px-4"
              : " w-full flex text-white text-sm py-1 px-4  border-b-2 "
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
              const top = document
                .getElementById("projectsPage")
                .getBoundingClientRect().top;
              window.scrollTo({ top: top + window.pageYOffset - 80 });
            }}
          >
            <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
              Projects
            </li>
          </button>
          <button
            onClick={() => {
              const top = document
                .getElementById("contactsPage")
                .getBoundingClientRect().top;
              window.scrollTo({ top: top + window.pageYOffset - 80 });
            }}
          >
            <li className="py-2 px-2 cursor-pointer border-2 border-transparent hover:border-b-white hover:border-b-2">
              Contact
            </li>
          </button>
        </ul>
      </nav>
    </div>
  );
}
