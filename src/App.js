import Home from './routes/Home'
import Event from './routes/Event'
// import Team from './routes/Team'
import About from './routes/About'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Event/>}/>
      {/* <Route path='/teams' element={<Team/>}/> */}
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
