import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { icons } from "../../assets/data/icon";

const Card2 = ({ data }) => {
  return (
    <div>
      <div
        data-aos="fade-right"
        className="px-4 shadow-lg bg-white dark:bg-[#1e2329] dark:text-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
      >
        <div className="flex  flex-col-reverse gap-y-3 items-center justify-between w-full mb-10 lg:flex-row">
          <div className="lg:mb-0  lg:pr-5">
            <div className="max-w-xl mb-6">
              <Link
                to={`/work/${data.slug}`}
                className="font-sans text-xl sm:mt-0 mt-6 font-medium tracking-tight sm:text-3xl sm:leading-none max-w-lg mb-6"
              >
                {data.title}
              </Link>
              <ul className="flex flex-wrap mt-3 items-center gap-5 mb-3">
                {data?.category?.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <img width={20} height={20} src={icons[item]} alt="" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base  text-gray-500">{data.description}</p>
            </div>

            <div className="space-x-4">
              <Link
                to={`/work/${data.slug}`}
                className="  text-lg font-medium inline-flex items-center"
              >
                <span> Get insights →</span>
              </Link>
            </div>
          </div>
          <Link to={`/work/${data.slug}`}>
            <img
              alt="logo"
              width={420}
              height={120}
              className="max-h-[300px] object-cover rounded-lg"
              src={data.thumbnail}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
Card2.propTypes = {
  data: PropTypes.object,
};
export default Card2;
