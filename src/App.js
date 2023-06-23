import logo from './logo.svg';
import './App.css';
import Home from './home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Info from './pages/info';

function App() {

  const [char , setchar] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home setchar={setchar} /> } path='/'/>
          <Route element={<Info char={char} /> } path='/info'/>
          <Route path='/'/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
