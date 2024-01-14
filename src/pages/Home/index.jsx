import Footer from "../../components/footer";
import { About, Education, Quotes, Review, Testimonial, Work } from "./components";
import { Element } from "react-scroll";
const HomePage = () => {
  return (
    <div>
      {/* my infomation home  */}
      <Element
        name="home"
        id="home"
        className="bg-white   shadow-lg dark:bg-[#1e2329] rounded-b-lg px-10 pt-10 relative"
      >
        <About />
      </Element>
      {/* quotes */}
      <Quotes />
      {/* Work  */}
      <Element name="work" className="pb-20 pt-10">
        <Work />
      </Element>
      {/* education */}
      <Element className="py-20 " name="education">
        <Education />
      </Element>
      {/* Testimonial */}
      <Element name="testimonials">
        <Testimonial />
      </Element>
      <Element name="reviews">
        <Review />
      </Element>
      <Footer/>
    </div>
  );
};

export default HomePage;
