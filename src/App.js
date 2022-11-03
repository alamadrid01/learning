import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Contactpage from './pages/contactpage/Contactpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />;
          <Route path='/contact' element={<Contactpage />} />;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
