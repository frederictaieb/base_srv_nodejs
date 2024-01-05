
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import CreateCandidate from './Pages/CreateCandidate';

function App() {
  return(
    <div className='App'>
      <Router>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/CreateCandidate">Créer un Candidat</Link>
        </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/CreateCandidate" element={<CreateCandidate/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

