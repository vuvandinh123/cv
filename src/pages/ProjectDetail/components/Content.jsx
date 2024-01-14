import { FaCheckCircle, FaGithub, FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div className="w-full md:w-4/12 dark:text-white ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <p className="text-blue-500 mb-5 text-sm">Website</p>
        <h3 className="text-3xl font-semibold">Website NFT Marketplace</h3>
        <p className="mt-4 text-md leading-relaxed text-gray-500">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <ul className="flex mt-3 items-center gap-5">
          <li className="flex gap-2 items-center">
            <FaReact /> React
          </li>
          <li className="flex gap-2 items-center">
            <SiTailwindcss /> Tailwind
          </li>
          <li className="flex gap-2 items-center">
            <SiFirebase /> Firebase
          </li>
        </ul>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div className="me-3">
                <FaCheckCircle color="#ffa200"></FaCheckCircle>
              </div>
              <div>
                <h4 className="text-blueGray-500">Responsive</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="me-3">
                <FaCheckCircle color="#ffa200"></FaCheckCircle>
              </div>
              <div>
                <h4 className="text-blueGray-500">04 Page</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="me-3">
                <FaCheckCircle color="#ffa200"></FaCheckCircle>
              </div>
              <div>
                <h4 className="text-blueGray-500">Animation</h4>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Link className="mt-6 w-max gap-3 px-5 py-3 flex items-center bg-gray-800 hover:shadow-2xl hover:bg-gray-900 text-white rounded-md">
            Go to source code <FaGithub />
          </Link>
          <Link className="mt-6 w-max gap-3 px-5 py-3 flex items-center bg-yellow-500 hover:shadow-2xl hover:bg-yellow-600 text-white rounded-md">
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
