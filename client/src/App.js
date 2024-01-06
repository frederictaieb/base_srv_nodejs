
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Candidate from './Pages/Candidate';
import CreateCandidate from './Pages/CreateCandidate';
import Test from './Pages/Test'
import { Navbar } from 'flowbite-react';


function App() {
  return(
    <div className='App'>
      
      <Router>
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="https://www.mrsearch.fr">
          <img src="/mr_search_logo.jpeg" className="mr-3 h-6 sm:h-9" alt="MR Search" />
          </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="/" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="/CreateCandidate" active>
                Créer un Candidat
              </Navbar.Link>
              <Navbar.Link href="/Test" active>
                Test
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Candidate/:id" element={<Candidate/>} />
            <Route path="/CreateCandidate" element={<CreateCandidate/>}></Route>
            <Route path="/Test" element={<Test/>}></Route>
            
          </Routes>

      </Router>
     
    </div>
  );
}

export default App;

