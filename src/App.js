import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import { Records } from './components/Records';
import { New } from './components/New';
import { Show } from './components/Show';

export default function App() {
  return (
    <div className="App">
      <Router> 
        <nav>
          <Link to='/'>Home</Link>  
          <Link to='/new'>New</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Records/>}></Route>
          <Route path='/:id' element={<Show/>}></Route>
          <Route path='/new' element={<New/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
