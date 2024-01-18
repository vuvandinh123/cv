import { useEffect, useState } from "react";
import { Card2 } from "../../components/commons";
import { DataWorks } from "../../assets/data/work";
import { categories } from "../../assets/data/Category";

const Work = () => {
  const [data, setData] = useState([]);
  const [cate, setCate] = useState("All");
  useEffect(() => {
    window.scrollTo(0, 0);
    if (cate === "All") setData(DataWorks);
    else {
      setData(DataWorks.filter((item) => item.category.includes(cate)));
    }
  }, [cate]);
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <h1 className="text-center py-3 mt-5 text-3xl font-bold dark:text-white">
        Experience
      </h1>
      <div className="my-5 sticky z-10 top-0 bg-white dark:bg-[#1e2329] shadow-md p-5 rounded-xl">
        <span className="text-xl font-semibold dark:text-white">
          Categories
        </span>
        <div className="flex justify-between scr-0 items-center overflow-scroll ">
          <ul className="flex  gap-3 mt-4 ">
            <li
              onClick={() => setCate("All")}
              className={`p-3 cursor-pointer rounded-lg bg-gray-200 dark:text-white  dark:bg-[#2e3338]  ${
                cate === "All" && "!bg-blue-700 text-white"
              }`}
            >
              All
            </li>
            {categories?.map((item) => (
              <li
                key={item.id}
                onClick={() => setCate(item.name)}
                className={`p-3 cursor-pointer rounded-lg bg-gray-200 dark:text-white  dark:bg-[#2e3338]  ${
                  cate === item.name && "!bg-blue-700 text-white"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <span className="text-md lg:block hidden dark:text-white">
            {data.length} Projects
          </span>
        </div>
      </div>
      <div className="px-5">
        {data.length > 0 &&
          data?.map((item) => <Card2 data={item} key={item.id} />)}
        {data.length === 0 && (
          <div className="text-center text-3xl text-gray-400 font-bold dark:text-white">
            No data
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
