import Card from "../../../components/commons/Card";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/slick";
import { useEffect, useState } from "react";
import { DataWorks } from "../../../assets/data/work";
import { Link } from "react-router-dom";

const Work = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = DataWorks.filter((item) => item.isHome === true);
    setData(newData);
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-5 lg:mt-10 ">
      <div className="flex dark:text-white  justify-center items-center">
        <div className="xl:w-1/2">
          <h2
            id="work"
            data-aos="fade-up"
            className="text-center text-3xl font-semibold mb-2"
          >
            Experience
          </h2>
          <p
            className="text-gray-500 text-center text-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Projects that I worked on during the years I studied programming
          </p>
        </div>
      </div>
      <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
        {data.length > 0 && (
          <Slider {...settings}>
            {data?.map((item, index) => {
              return <Card key={index} data={item}></Card>;
            })}
          </Slider>
        )}
        {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2"></div> */}
        <div className="flex justify-center mt-10">
          <Link to="/work" className="mt-5 rounded-md bg-yellow-500 p-2 px-5  text-white">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
