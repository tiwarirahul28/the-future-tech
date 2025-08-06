import Event from "../routes/Event";
import Gallery from "../routes/Gallery";
import Team from "../routes/Team";
import Home from "../routes/Home";
import About from "../components/AboutUs/AboutUs";
import Futuretech1 from "../routes/Futuretech1";
import Register from "../routes/Register";
import EventsTemplate from "../components/EventsTemplate/EventsTemplate";
import NotFound from "../components/NotFound/NotFound";
import Schedule from "../routes/Schedule";

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/events/:slug",
    element: <EventsTemplate />,
  },
  {
    path: "/eventschedule",
    element: <Schedule />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/futuretech1O",
    element: <Futuretech1 />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default Routes;
