import { Link } from "react-router-dom";
import { Content, Images } from "./components/";
import { GrLinkPrevious } from "react-icons/gr";
const ProjectDetailPage = () => {
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <Link to={"/"} className="fixed flex items-center justify-center hover:bg-blue-400 hover:text-yellow-400 transition-all duration-200 cursor-pointer top-5 left-10 rounded-full w-10 h-10 bg-gray-300">
        <GrLinkPrevious></GrLinkPrevious>
      </Link>
      <div className="items-center flex flex-wrap">
        <Images />
        <Content />
      </div>
    </section>
  );
};

export default ProjectDetailPage;
