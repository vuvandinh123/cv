import PropTypes from "prop-types";
const Rangle = ({ title, percent }) => {
  return (
    <div className="mt-5 ">
      <div className="flex text-sm justify-between">
        <p>{title}</p>
        <p className="text-[12px]">{percent}%</p>
      </div>
      <div className="h-[6px] mt-2 rounded-full border-[2px] border-yellow-200 relative w-full">
        <div
          style={{ width: `${percent}%` }}
          className="h-[3px] absolute left-0 -z-1 rounded-full bg-yellow-500"
        ></div>
      </div>
    </div>
  );
};
Rangle.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
};
export default Rangle;
