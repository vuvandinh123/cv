import person from "../../assets/dinh1.png";
import { FaMinus } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SideBar, Skills } from "./components";
import { useEffect } from "react";
const Cv = () => {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.parentNode.removeChild(metaViewport);
    }
    return () => {
      const newMetaViewport = document.createElement("meta");
      newMetaViewport.name = "viewport";
      newMetaViewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(newMetaViewport);
    };
  }, []);
  const handlePrint = () => {
    window.print();
  };
  return (
    <div
      id="cv"
      className="bg-white w-[900px] print-content max-w-full  mx-auto "
    >
      <div className="">
        <Link className="flex gap-2  fixed top-5 left-5" to={"/"}>
          <GrLinkPrevious size={25} color="red"></GrLinkPrevious>
          <span className="hover:text-red-500">Back to home</span>
        </Link>
      </div>
      <div className="w-full relative h-36 bg-[#111111]">
        <div>
          <img className="w-36 h-36 rou" src={person} alt="" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white flex items-center gap-2 text-[14px]">
            {" "}
            <FaMinus></FaMinus>{" "}
            <span className="text-yellow-500 uppercase font-semibold">
              Front-end Developer
            </span>
          </p>
          <h1 className="text-5xl mt-2 font-bold text-white">Vu Van Dinh</h1>
        </div>
      </div>
      <div className="flex  mt-10 px-6">
        {/* sider */}
        <SideBar />
        {/* content */}
        <Skills />
      </div>
      <button
        onClick={handlePrint}
        className="fixed right-10 bottom-10 rounded-md text-white px-4 py-2 font-bold bg-orange-500"
      >
        Dowload
      </button>
    </div>
  );
};

export default Cv;
