import Home from '../pages/Home';
import About from '../pages/About';

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    layout: "/",
    exact: true,
    component: <Home/>,
  },
  {
    path: "/about",
    name: "About",
    layout: "/",
    exact: true,
    component: <About/>,
  },
];

export  {
  mainRoutes
}