import './App.css'
import { Header } from './components/assets/Header';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Clubs } from './pages/Clubs';
import { Content } from './pages/Contents';
import { Event } from './pages/Events';
import { Login } from './pages/Login';
import { News } from './pages/News';
import { About } from './pages/About';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} >
        <Route path='/Clubs'  element={<Clubs/>}/>
        <Route path='/Content' element={<Content/>}/>
        <Route path='/Event' element={<Event/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/About' element={<About/>} />
        </Route>
  
    </Routes>
    </BrowserRouter>
  )
}

export default App;
