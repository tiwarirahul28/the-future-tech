import Event from "../routes/Event";
import Gallery from "../routes/Gallery";
import Home from "../routes/Home";
import About from '../components/AboutUs/AboutUs'
import Futuretech1 from '../routes/Futuretech1';
import Register from "../routes/Register";
import EventsTemplate from "../components/EventsTemplate/EventsTemplate";

const Routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/events",
        element: <Event/>,
    },
    {
        path: "/events/:slug",
        element: <EventsTemplate/>,
    },
    {
        path: "/gallery",
        element: <Gallery/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/futuretech1O",
        element: <Futuretech1/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "*",
        element:  <div>404 Not Found</div>,
    },
]
export default Routes;