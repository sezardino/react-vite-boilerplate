import { RouteObject } from "react-router-dom";
import { ErrorTemplate } from "../../components/templates/Error/ErrorTemplate";
import { PROJECT_URLS } from "../../const";
import { HomePage } from "../../pages/Home";

export const ProjectRoutes: RouteObject[] = [
  {
    path: PROJECT_URLS.home,
    element: <HomePage />,
    errorElement: <ErrorTemplate />,
  },
];
