import { useRoutes } from "react-router-dom";
import Background from "./components/commons/Background";
import { LayoutHome } from "./layouts";
import Cv from "./pages/cv";
import ProjectDetailPage from "./pages/ProjectDetail";
import { useEffect } from "react";

function App() {
  const routes = [
    {
      path: "/",
      element: <LayoutHome />,
    },
    {
      path: "/info",
      element: <Cv />,
    },
    {
      path: "/detail",
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
