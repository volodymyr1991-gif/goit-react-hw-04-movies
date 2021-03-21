import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: lazy(() =>
      import(
        "../components/homePage/HomePage" /* webpackChunkName: "HomePage" */
      )
    ),
  },
  {
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() =>
      import(
        "../components/moviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
      )
    ),
  },

  {
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import(
        "../components/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
      )
    ),
  },
];