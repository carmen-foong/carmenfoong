import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "/src/pages/App/App.jsx";
import ProjectDetail from "/src/pages/ProjectDetail/ProjectDetail.jsx";
import ErrorPage from "/src/pages/ErrorPage/ErrorPage.jsx";
import { projects } from "/src/projects.js"; // Import projects
import "./pages/index.css";
import MyWorksPage from "./pages/MyWorksPage/MyWorksPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

// Create a project loader function
function projectLoader({ params }) {
  const project = projects.find(
    (p) =>
      p.id === Number(params.projectId) ||
      p.title.toLowerCase().replace(/\s+/g, "-") ===
        params.projectId.toLowerCase()
  );
  if (!project) throw new Response("Not Found", { status: 404 });
  return project;
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/myworks",
    element: <MyWorksPage />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetail />,
    loader: projectLoader, // Use the loader function
  },
  {
    path: "/about",
    element: <AboutMe />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
