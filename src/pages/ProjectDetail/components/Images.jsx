import image1 from "../../../assets/project/project1.jpeg";
import image2 from "../../../assets/project/project2.jpeg";
import Slider from "react-slick";
const Images = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
  };
  return (
    <div className="w-[500px] overflow-y-auto shadow-xl rounded-md h-[600px] overflow-x-hidden md:w-5/12 ml-auto mr-auto ">
      <Slider {...settings}>
        <div className="px-5">
          <img
            alt="..."
            className="max-w-full w-full  rounded-lg shadow-lg"
            src={image1}
          />
        </div>
        <div className="px-5">
          <img
            alt="..."
            className="max-w-full w-full  rounded-lg shadow-lg"
            src={image2}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Images;
