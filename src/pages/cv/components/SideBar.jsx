import { FaCss3, FaFacebookF, FaGithub, FaHtml5, FaPhoneAlt, FaReact, FaYoutube } from "react-icons/fa";
import { IoEarth, IoLogoJavascript } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const SideBar = () => {
  return (
    <div>
      <div className="basis-1/4 relative after:contents-[''] after:block after:w-[1px] after:top-0 after:h-full after:absolute after:right-0 after:bg-gray-100">
        {/* Contact */}
        <div className="before:contents-[''] relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
          <h2 className="font-bold uppercase">Contact</h2>
          <div className="mt-5">
            <div className="flex my-2">
              <MdOutlineEmail className="mt-1 mr-2"></MdOutlineEmail>
              <div>
                <span className="text-gray-500">Email</span>
                <p>vuvandinh203@gmail.com</p>
              </div>
            </div>
            <div className="flex my-2">
              <FaPhoneAlt className="mt-1 mr-2"></FaPhoneAlt>
              <div>
                <span className="text-gray-500">Phone</span>
                <p>+84333 583 800</p>
              </div>
            </div>
            <div className="flex my-2">
              <IoEarth className="mt-1 mr-2"></IoEarth>
              <div>
                <span className="text-gray-500 block">Web</span>
                <a href="https://vuvandinh123.github.io/cv/">
                  https://vuvandinh123.github.io/cv/
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Follow */}
        <div className="before:contents-[''] relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
          <h2 className="font-bold uppercase">Follow me</h2>
          <div className="mt-3">
            <p className="text-gray-500">@vuvandinh203</p>
            <ul className="flex items-center gap-2 mt-2">
              <li>
                <a href="">
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithub></FaGithub>
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube></FaYoutube>
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="before:contents-[''] mt-5 relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
          <h2 className="font-bold uppercase">Skills</h2>
          <div className="mt-3">
            <ul className="">
              <li>
                <a href="" className="bock flex items-center gap-2">
                  <FaHtml5 color="red"></FaHtml5>
                  HTML
                </a>
              </li>
              <li>
                <a href="" className="bock flex items-center gap-2">
                  <FaCss3 color="blue"></FaCss3>
                  CSS
                </a>
              </li>
              <li>
                <a href="" className="bock flex items-center gap-2">
                  <IoLogoJavascript color="#ffb700"></IoLogoJavascript>
                  Javascript
                </a>
              </li>
              <li>
                <a href="" className="bock flex items-center gap-2">
                  <FaReact color="blue"></FaReact>
                  ReactJs
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Education */}
        <div className="before:contents-[''] mt-5 relative before:absolute before:top-0 before:left-0 py-3 before:block before:w-5 before:h-[2px] before:bg-yellow-500">
          <h2 className="font-bold uppercase">Education</h2>
          <div className="mt-3">
            <ul className="">
              <label className="text-gray-500 py-2 block text-[12px]">
                2018 - 2021
              </label>
              <hr />
              <li className="mt-3">
                <a
                  href=""
                  className="bock font-semibold flex items-center gap-2"
                >
                  High school Le Quy Don - Da Teh
                </a>
              </li>
              <label className="text-gray-500 py-2 block text-[12px]">
                2021 - 2024
              </label>
              <hr />
              <li className="mt-3">
                <a
                  href=""
                  className="bock font-semibold flex items-center gap-2"
                >
                  Ho Chi Minh City Industry and Trade College
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
