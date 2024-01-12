import user from "../../assets/user.png";
import { Education, Work } from "./components";

const HomePage = () => {
  return (
    <div>
      {/* my infomation home  */}
      <div id="home" className="bg-white px-10 pt-10 relative">
        <div>
          <div className="absolute left-20 top-5 w-3 h-3 rounded-lg border-[2px] border-red-500"></div>
          <div className="absolute left-[60%] top-5 w-3 h-3 rounded-lg border-[2px] border-orange-500"></div>
          <div className="absolute left-52 rounded-md top-2/3 w-4 h-4 border-[2px] border-red-500"></div>
          <div className="absolute left-2/3 top-1/2 w-3 h-3 rounded-full border-[2px] border-yellow-500"></div>
          <div className="absolute left-2/4 top-2/3 w-3 h-3 rounded-full border-[2px] border-blue-500"></div>
          <div className="absolute right-10 top-2/3 w-3 h-3 rounded-full border-[2px] border-green-500"></div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="basis-2/3 pb-5">
            <h1 className="lg:text-5xl text-center lg:text-start text-3xl mt-5 lg:mt-0 font-bold">{`I'm Vu Van Dinh`}</h1>
            <h2 className="lg:text-5xl text-xl text-center lg:text-start font-bold">
              <span className="text-yellow-500">Front-end</span>{" "}
              <span>Developer</span>
            </h2>
            <p className="mt-5 text-sm text-center lg:text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              libero porro, doloribus culpa itaque eos, obcaecati in quos
              aspernatur quisquam eveniet at corporis harum dolor soluta
              temporibus eaque. Repudiandae, magnam?
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-5 rounded-md bg-yellow-500 p-2 text-white">
                Download CV
              </button>
            </div>
          </div>
          <div className="lg:ml-10 ml-3 flex justify-center lg:justify-start flex-shrink-0">
            <img className="w-[200px]" src={user} alt="" />
          </div>
        </div>
      </div>
      {/* education */}
      <Education />
      {/* Work  */}
      <Work />
    </div>
  );
};

export default HomePage;
