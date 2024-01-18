import { useEffect } from "react";
import { Offcanvas } from "../components/commons";
import MenuLeft from "../components/menuLeft";
import MenuRight from "../components/menuRight";
import { HomePage } from "../pages";

const LayoutHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" min-h-screen overflow-x-hidden  lg:px-10 px-5 ">
      {/* setting and menu left */}
      <Offcanvas></Offcanvas>
      <div className="">
        <div className="">
          <MenuLeft></MenuLeft>
        </div>
        <div className="lg:ml-[300px] lg:mr-[130px] mb-20">
          <HomePage></HomePage>
        </div>
        <div className="">
          <MenuRight></MenuRight>
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;
