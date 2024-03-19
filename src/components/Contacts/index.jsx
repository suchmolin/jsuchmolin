import "./index.css";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { SiGmail } from "react-icons/si";
export default function Contacts() {
  return (
    <div id="contactsPage" className="">
      <div id="dividerContacts" className="dividerContacts relative h-32">
        <div className="skewedContacts"></div>
        <div className="contacts w-full flex justify-center pt-10">
          <img
            style={{ width: "60px" }}
            src="./img/logowhiteorange.png"
            alt=""
            className="mt-20"
          />
        </div>
        <div className="contacts w-full text-center text-white Poppins pt-4 pb-10">
          <ul className=" w-full flex gap-7 md:gap-10 justify-center mt-10 mb-12">
            <a href="https://github.com/suchmolin" target="_blank">
              <li className="rounded-full p-3 text-xl ring-2 ring-white cursor-pointer  hover:bg-white hover:text-black ease-in-out duration-500">
                <FiGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/josesuchmolin/"
              target="_blank"
            >
              <li className="rounded-full p-3 text-xl ring-2 ring-white cursor-pointer  hover:bg-white hover:text-black ease-in-out duration-500">
                <FaLinkedinIn />
              </li>
            </a>
            <a href="https://www.facebook.com/suchmolinjose" target="_blank">
              <li className="rounded-full p-3 text-xl ring-2 ring-white cursor-pointer  hover:bg-white hover:text-black ease-in-out duration-500">
                <FaFacebookF />
              </li>
            </a>
            <a href="https://www.freelancer.es/u/suchmolin11" target="_blank">
              <li className="rounded-full p-3 text-xl ring-2 ring-white cursor-pointer  hover:bg-white hover:text-black ease-in-out duration-500">
                <SiFreelancer />
              </li>
            </a>
            <a href="mailto:suchmolin11@gmail.com" target="_blank">
              <li className="rounded-full p-3 text-xl ring-2 ring-white cursor-pointer  hover:bg-white hover:text-black ease-in-out duration-500">
                <SiGmail />
              </li>
            </a>
          </ul>
          <p className="mb-10">suchmolin11@gmail.com</p>

          <p className="text-sm">
            When a dream dies it is because it has become real
          </p>
          <p className="text-sm">Keep fighting to make them come true</p>
        </div>
      </div>
    </div>
  );
}
