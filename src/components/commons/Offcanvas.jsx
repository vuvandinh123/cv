import { useState } from "react";
import { useTime } from "../../hook";
import { IoClose } from "react-icons/io5";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Darkmod from "./Darkmod";
import { Link } from "react-router-dom";

const Offcanvas = () => {
  const { hours, minutes, seconds } = useTime();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-10 flex items-center font-bold justify-center left-0 cursor-pointer rounded-r-full    bg-[#FFBF00]  text-white h-10 w-10 z-50 "
      >
        {isOpen ? (
          <IoClose size={35}></IoClose>
        ) : (
          <HiBars3BottomLeft color="" size={35}></HiBars3BottomLeft>
        )}
      </div>
      {isOpen && (
        <div>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 cursor-crosshair"
          ></div>
          <div
            className="fixed top-0 right-0 lg:right-3/4 left-0 shadow-2xl dark:bg-[#1e2329] bg-white dark:text-white   bottom-0 z-40"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="flex flex-col justify-between items-center h-full">
              <div className="mt-10">
                <Darkmod size={50}></Darkmod>
              </div>
              <div>
                <ul className="flex flex-col gap-5 uppercase font-bold text-center">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/work"}>Experience</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="pb-10">
                <div className="font-bold  dark:text-white  lg:flex items-center justify-center">
                  <div>
                    {hours} : {minutes <= 9 ? "0" + minutes : minutes} :{" "}
                    {seconds <= 9 ? "0" + seconds : seconds}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offcanvas;
