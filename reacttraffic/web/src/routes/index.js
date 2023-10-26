import _ from "lodash";
import LayoutRoute from "../layouts/LayoutRoute";
import AuthLayoutRoute from "../layouts/AuthLayoutRoute";
import HomePageRoute from "../layouts/HomePageRoute";

import Login from "../pages/Login/index";
import TablePage from "../pages/TablePage/index";
import ChartPage from "../pages/ChartPage/index";
import EventPage from "../pages/EventPage/index";
import NewForm from "../pages/NewForm/index";

export default [
  {
    key: "/",
    path: "/",
    exact: true,
    component: Login,
    layout: AuthLayoutRoute,
    title: "批判思維教學系統",
  },
  {
    key: "/TablePage",
    path: "/TablePage",
    exact: true,
    component: TablePage,
    layout: HomePageRoute,
    title: "首頁",
  },
  {
    key: "/NewForm",
    path: "/NewForm",
    exact: true,
    component: NewForm,
    layout: HomePageRoute,
    title: "首頁",
  },
  {
    key: "/ChartPage",
    path: "/ChartPage",
    exact: true,
    component: ChartPage,
    layout: HomePageRoute,
    title: "首頁",
  },
  {
    key: "/EventPage",
    path: "/EventPage",
    exact: true,
    component: EventPage,
    layout: HomePageRoute,
    title: "首頁",
  },
];
