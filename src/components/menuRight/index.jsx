import icon from "../../assets/Contrast.svg";
import { FiHome } from "react-icons/fi";
import { FaRegFileCode } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
const MenuRight = () => {
  return (
    <div className="bg-white lg:h-screen w-screen h-[70px] fixed bottom-0 right-0 left-0 lg:left-auto lg:top-0 lg:w-[100px] lg:mr-10">
      {/* Dark mode */}
      <div className="mt-10 hidden  lg:flex items-center justify-center">
        <button>
          <img src={icon} alt="" />
        </button>
      </div>
      {/* Menu */}
      <div className="lg:mt-10 mt-3 pb-3 lg:pb-0 flex justify-center absolute top-0 left-0 right-0 bottom-0 items-center">
        <ul className="flex  lg:flex-col flex-row justify-center items-center gap-7 ">
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <a href="#home">
              <FiHome color="#fff"></FiHome>
            </a>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <a href="#work">
              <FaRegFileCode color="#fff"></FaRegFileCode>
            </a>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <a href="#education">
              <PiStudentBold color="#fff"></PiStudentBold>
            </a>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <MdWork color="#fff"></MdWork>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <FaNoteSticky color="#fff"></FaNoteSticky>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuRight;
