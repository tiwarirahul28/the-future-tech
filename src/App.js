import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import routes from './Data/Routes.js'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {routes.map((route) => (
        <Route path={route?.path} element={route?.element}></Route>
      ))}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
