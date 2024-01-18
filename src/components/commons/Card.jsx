import PropTypes from "prop-types";
import { icons } from "../../assets/data/icon";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="p-3 ">
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl dark:bg-[#1e2329] bg-white bg-clip-border text-gray-700 shadow-lg">
        <Link to={`/work/${data.slug}`}>
          <div className="relative mx-4 mt-4 overflow-hidden rounded-md bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40">
            <img
              className="w-full h-[200px] object-cover"
              src={data.thumbnail}
              alt="ui/ux review check"
            />

            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            <Link
              to={`/work/${data.slug}`}
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </span>
            </Link>
          </div>
        </Link>
        <div className="p-6">
          <div className="mb-3 dark:text-white flex items-center justify-between">
            <h5
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
              className="block h-[45px] overflow-hidden text-ellipsis font-sans text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              <Link to={`/work/${data.slug}`}>{data.title}</Link>
            </h5>
          </div>
          <div className="flex dark:text-white  items-center flex-wrap gap-2">
            {data?.category?.map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                <img className="w-4 h-4" src={icons[item]} alt="" />
                <span className="text-[11px] ">{item}</span>
              </span>
            ))}
          </div>
          <p
            style={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
            className="block mt-5 overflow-hidden text-ellipsis text-[12px] font-sans  leading-relaxed text-gray-500 antialiased"
          >
            {data.description}
          </p>
        </div>
        <div className="p-6 pt-3">
          <Link
            to={`/work/${data.slug}`}
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            See
          </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
