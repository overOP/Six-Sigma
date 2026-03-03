import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/minLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import OurStory from "../pages/OurStory";
import OurTeam from "../pages/OurTeam";
import Branches from "../pages/branches";
import Services from "../pages/Services";
import Universities from "../pages/Universities";
import UniversitiesByCountry from "../pages/UniversitiesByCountry";
import UniversityDetails from "../pages/UniversityDetails";
import Apply from "../pages/Apply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/our-story", element: <OurStory /> },
      { path: "/our-team", element: <OurTeam /> },
      { path: "/branches", element: <Branches /> },
      { path: "/services", element: <Services /> },
      { path: "/Applyonlinenow", element: <Apply /> },

      { path: "/universities", element: <Universities /> },
      { path: "/universities/:country", element: <UniversitiesByCountry /> },
      {
        path: "/universities/:country/:university",
        element: <UniversityDetails />,
      },
    ],
  },
]);

