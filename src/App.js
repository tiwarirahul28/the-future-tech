import Home from './routes/Home'
import Event from './routes/Event'
import Team from './routes/Team'
import About from './routes/About'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Event/>}/>
      <Route path='/' element={<Team/>}/>
      <Route path='/' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
