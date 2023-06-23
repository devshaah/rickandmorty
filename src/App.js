import logo from './logo.svg';
import './App.css';
import Rick from './pages/rick';
import { BrowserRouter as Router , Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Info from './pages/info';
import Home from './home';
import Board from './pages/pedro';

function App() {

  const [char , setchar] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Rick setchar={setchar} /> } path='/rickandmorty'/>
          <Route element={<Info char={char} /> } path='/info'/>
          <Route element={<Home/>} path='/'/>
          <Route element={<Board/>} path='/todo'/>
          <Route path='/'/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
