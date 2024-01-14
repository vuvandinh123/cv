import Card from "../../../components/commons/Card";
import image1 from "../../../assets/screenshot_1705073216.png";
import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/slick";

const Work = () => {
  const data = [
    {
      name: "Website NFT Collection",
      image: image1,
      desc: "su dung tailwindcss",
      tech: [
        {
          name: "ReactJS",
          icon: <FaReact></FaReact>,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss></SiTailwindcss>,
        },
        {
          name: "ViteJS",
          icon: <TbBrandVite></TbBrandVite>,
        },
      ],
      link: "https://www.google.com/",
    },
    {
      name: "Website NFT Collection",
      image: image1,
      desc: "su dung tailwindcss",
      tech: [
        {
          name: "ReactJS",
          icon: <FaReact></FaReact>,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss></SiTailwindcss>,
        },
        {
          name: "ViteJS",
          icon: <TbBrandVite></TbBrandVite>,
        },
      ],
      link: "https://www.google.com/",
    },
    {
      name: "Website Shoe Store",
      image: image1,
      desc: "",
      tech: [
        {
          name: "ReactJS",
          icon: <FaReact></FaReact>,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss></SiTailwindcss>,
        },
        {
          name: "ViteJS",
          icon: <TbBrandVite></TbBrandVite>,
        },
      ],
      link: "https://www.google.com/",
    },
    {
      name: "Website Ecommerce ",
      image: image1,
      desc: "",
      tech: [
        {
          name: "ReactJS",
          icon: <FaReact></FaReact>,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss></SiTailwindcss>,
        },
        {
          name: "ViteJS",
          icon: <TbBrandVite></TbBrandVite>,
        },
      ],
      link: "https://www.google.com/",
    },
  ];
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
    <div className="px-5 my-10 ">
      <div className="flex dark:text-white  justify-center items-center">
        <div className="xl:w-1/2">
          <h2 id="work" className="text-center text-3xl font-semibold mb-2">
            My Project
          </h2>
          <p className="text-gray-500 text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            placeat soluta maxime porro similique, alias itaque? Temporibus,
            ducimus? At ipsa id voluptas neque voluptatem, nobis officiis quia
            soluta aliquid ducimus.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((item, index) => {
            return <Card key={index} data={item}></Card>;
          })}
        </Slider>
        {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2"></div> */}
        <div className="flex justify-center mt-10">
          <button className="mt-5 rounded-md bg-yellow-500 p-2 px-5  text-white">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
