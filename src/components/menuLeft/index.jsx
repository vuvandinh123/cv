import avatar from "../../assets/Profile.jpg";
import icon1 from "../../assets/Icons.svg";
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import Rangle from "../commons/Rangle";
const MenuLeft = () => {
  return (
    <div className="bg-white lg:w-[270px] overflow-y-auto px-3 mb-20 lg:mb-0 lg:h-screen lg:fixed">
      {/* avatar */}
      <div className="flex justify-center mt-5">
        <img className="w-24 h-24" src={avatar} alt="" />
      </div>
      {/* name and link profile */}
      <div className="flex justify-center my-5">
        <div>
          <h2 className="text-center text-xl font-semibold">Vu Van Dinh</h2>
          <p className="text-[#767676] text-center mt-2 text-[14px] font-normal">
            Font-end Developer
          </p>
          <div className="mt-5">
            <ul className="flex justify-between gap-5 items-center">
              <li className="rounded-full flex justify-center items-center w-6 h-6 bg-yellow-500">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="rounded-full flex justify-center items-center w-6 h-6 bg-yellow-500">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li className="rounded-full flex justify-center items-center w-6 h-6 bg-yellow-500">
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li className="rounded-full flex justify-center items-center w-6 h-6 bg-yellow-500">
                <a href="">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* my infomation  */}
      <div className=" my-5">
        <div className="flex mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Age: </p>
          <p className="">21</p>
        </div>
        <div className="flex mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Phone: </p>
          <p className=" text-sm">+84333583800</p>
        </div>
        <div className="flex mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Freelance:: </p>
          <p className=" text-green-500 text-sm">Avaliable</p>
        </div>
        <div className="flex mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Address: </p>
          <p className=" text-sm">TP. Ho Chi Minh </p>
        </div>
      </div>
      {/* My Languages */}
      <hr />
      <div className="my-5">
        <h2 className="font-semibold">Languages</h2>
        <Rangle title="Vietnamese" percent={100}></Rangle>
        <Rangle title="English" percent={51}></Rangle>
      </div>
      <hr />
      {/* Skills */}
      <div className="my-5">
        <h2 className="font-semibold">Skills</h2>
        <Rangle title="HTML" percent={90}></Rangle>
        <Rangle title="CSS" percent={70}></Rangle>
        <Rangle title="Javascript" percent={70}></Rangle>
        <Rangle title="React Js" percent={65}></Rangle>
        <Rangle title="Express" percent={65}></Rangle>
        <Rangle title="PHP" percent={50}></Rangle>
      </div>
      {/* Extra Skills */}
      <div className="my-5">
        <h2 className="font-semibold">Extra Skills</h2>
        <div className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>Bootstrap, Tailwindcss, Material UI </p>
          </div>
        </div>
        <div className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>Sass, Less, Styled </p>
          </div>
        </div>
        <div className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>Git, Github, Docker </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
