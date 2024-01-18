import { useRoutes } from "react-router-dom";
import Background from "./components/commons/Background";
import { LayoutHome } from "./layouts";
import ProjectDetailPage from "./pages/ProjectDetail";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LayoutWork from "./layouts/LayoutWork";
function App() {
  AOS.init({
    duration: 1800,
    offset: 0,
  });

  const routes = [
    {
      path: "/",
      element: <LayoutHome />,
    },
    {
      path: "/work",
      element: <LayoutWork />,
    },
    {
      path: "/work/:slug",
      element: <ProjectDetailPage />,
    },
  ];
  // dark mode
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);
  return (
    <>
      {useRoutes(routes)}
      {/* <LayoutHome></LayoutHome> */}
      <Background />
    </>
  );
}

export default App;
