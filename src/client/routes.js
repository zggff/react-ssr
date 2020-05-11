import { HomePage } from "./pages/Home.page";
import { TestPage } from "./pages/Test.page";

const routes = [
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/test",
    exact: true,
    component: TestPage,
  },
  {
    path: "**",
    redirect: "/home",
  },
];

export default routes;
