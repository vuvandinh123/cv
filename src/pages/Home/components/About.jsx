import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import user from "../../../assets/user.png";

const About = () => {
  return (
    <>
      <div className="flex lg:flex-row  flex-col-reverse">
        <div className="basis-2/3 dark:text-white pb-5">
          <h1 className="lg:text-5xl text-center lg:text-start text-3xl mt-5 lg:mt-0 font-bold "  data-aos="fade-right">{`I'm Vu Van Dinh`}</h1>
          <h2 className="lg:text-5xl text-xl text-center lg:text-start font-bold" data-aos="fade-left">
            <span className="text-yellow-500">Front-end</span>{" "}
            <span>Developer</span>
          </h2>
          <p className="mt-5 text-sm text-center lg:text-start text-gray-500" data-aos="fade-up">
            I am passionate about front-end development to create user-friendly
            websites. With 1 years of experience working with HTML/CSS,
            JavaScript and ReactJS, I have developed strong capabilities in
            these technologies. I pride myself on my ability to quickly learn
            new skills, work effectively in teams, and communicate well.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://www.canva.com/design/DAF54BDeb4s/K8V0wfZJifhDokhFX8SuxQ/view?utm_content=DAF54BDeb4s&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="mt-5 hover:text-white hover:bg-yellow-600 rounded-md flex items-center gap-2 px-5 font-semibold uppercase bg-yellow-500 p-2 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div className="lg:ml-10 ml-3 flex justify-center lg:justify-start flex-shrink-0" data-aos="flip-left">
          <img className="w-[200px]" src={user} alt="" />
        </div>
      </div>
      <div>
        <div className="absolute left-20 top-5 w-3 h-3 rounded-lg border-[2px] border-red-500"></div>
        <div className="absolute left-[60%] top-5 w-3 h-3 rounded-lg border-[2px] border-orange-500"></div>
        <div className="absolute left-52 rounded-md top-2/3 w-4 h-4 border-[2px] border-red-500"></div>
        <div className="absolute left-2/3 top-1/2 w-3 h-3 rounded-full border-[2px] border-yellow-500"></div>
        <div className="absolute left-2/4 top-2/3 w-3 h-3 rounded-full border-[2px] border-blue-500"></div>
        <div className="absolute right-10 top-2/3 w-3 h-3 rounded-full border-[2px] border-green-500"></div>
      </div>
    </>
  );
};

export default About;
