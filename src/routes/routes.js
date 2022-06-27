import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";

const publicRoutes = [{ path: "/", component: HomePage }];
const privateRoutes = [
  { path: "/", component: Dashboard },
  { path: "/categories", component: Categories },
];

export { publicRoutes, privateRoutes };
