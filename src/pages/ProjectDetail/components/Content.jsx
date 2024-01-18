import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { icons } from "../../../assets/data/icon";
const Content = ({ data }) => {
  return (
    <div className="w-full md:w-4/12 dark:text-white ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <p className="text-blue-500 mb-2 text-sm">Website</p>
        <h3 className="text-2xl lg:text-3xl  font-semibold">{data?.title}</h3>
        <p className="mt-4 text-md leading-relaxed text-gray-500">
          {data?.description}
        </p>

        <ul className="flex flex-wrap mt-3 items-center gap-5">
          {data?.category?.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <img width={20} height={20} src={icons[item]} alt="" />
              {item}
            </li>
          ))}
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
          <Link target="_blank" rel="noopener noreferrer" to={data?.source} className="mt-6 w-max gap-3 px-5 py-3 flex items-center bg-gray-800 hover:shadow-2xl hover:bg-gray-900 text-white rounded-md">
            Go to source code <FaGithub />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={data?.demo}
            className="mt-6 w-max gap-3 px-5 py-3 flex items-center bg-yellow-500 hover:shadow-2xl hover:bg-yellow-600 text-white rounded-md"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};
Content.propTypes = {
  data: PropTypes.object,
};
export default Content;
