import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/slick";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
const colRef = collection(db, "Portfolio");

const Testimonial = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      // map dữ liệu từ snapshot
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });

    return () => unsubscribe();
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
    <div className="lg:mt-20 pt-10">
      <div className="flex justify-center dark:text-white mb-10 items-center">
        <div className="xl:w-1/2 ">
          <h2
            id="education"
            className="text-center text-3xl font-semibold mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Testimonial
          </h2>
          <p
            className="text-gray-500 text-center text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Where customers visit to leave reviews about the website
          </p>
        </div>
      </div>
      {data.length > 0 && (
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} data-aos="fade-up" className="p-5">
              <figure className="rounded-2xl bg-white dark:bg-[#1e2329] dark:text-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900 dark:text-gray-300">
                  <p>“{item.content}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://rcmi.fiu.edu/wp-content/uploads/sites/30/2018/02/no_user.png"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                  </div>
                </figcaption>
              </figure>
              {/* More testimonials... */}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Testimonial;
