import Event from "../routes/Event";
import Gallery from "../routes/Gallery";
import Home from "../routes/Home";
import About from '../routes/About'
import Futuretech1 from '../routes/Futuretech1';

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
        path: "*",
        element:  <div>404 Not Found</div>,
    },
]
export default Routes;