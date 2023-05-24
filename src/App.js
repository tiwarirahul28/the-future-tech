import Home from './routes/Home'
import Event from './routes/Event'
// import Team from './routes/Team'
import About from './routes/About'
import {Routes, Route} from 'react-router-dom';
import Gallery from './routes/Gallery';
import Futuretech1 from './routes/Futuretech1';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Event/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/futuretech1O' element={<Futuretech1/>}/>
    </Routes>
    </>
  );
}

export default App;
