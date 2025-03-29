import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages/index.css";
import App from "./pages/App/App.jsx";
import MyWorksPage from "./pages/MyWorksPage/MyWorksPage.jsx";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/myworks",
    element: <MyWorksPage />,
  },
  {
    path: "/:projectTitle",
    element: <ProjectDetail />,
    loader: ({ params }) => {
      const project = projects.find(
        (p) =>
          p.title.toLowerCase().replace(/\s+/g, "-") === params.projectTitle
      );
      if (!project) throw new Response("Not Found", { status: 404 });
      return project;
    },
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
