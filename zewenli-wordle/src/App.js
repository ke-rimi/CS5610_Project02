import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import WordleEasy from './WordleEasy/WordleEasy';
import RulePage from './RulePage/RulePage';
import WordleHard from './WordleHard/WordleHard';
import './App.css';

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isEasyPage = location.pathname === '/game/normal';
  const isRulePage = location.pathname === '/rules';
  const isHardPage = location.pathname === "/game/hard";

  return (
    <nav >
      <ul>
        <li ><Link to="/" className={isHomePage ? "active" : ""}>Home</Link></li>
        <li><Link to="/game/normal"className={isEasyPage ? "active" : ""}>Play Wordle Easy</Link></li>
        <li><Link to="/game/hard"className={isHardPage ? "active" : ""}>Hard</Link></li>
        <li><Link to="/rules"className={isRulePage ? "active" : ""}>Game Rules</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={
          
          <div class="container">
          <h1 className="header">Welcome to play the Wordle Game</h1>
          
          <div className="first-div">
            In this game, you can choose different modes and guess the word by all the clues!
          </div>
        
          <div className="first-div">
            In the navigation bar, you can read the rules for the game.
          </div>
        
          <div className="last-div">
            Then you can choose different options to explore the game, good luck!
          </div>
        </div>
        
          
          
               
          } />
          <Route path="/game/normal" element={<WordleEasy />} />
          <Route path="/game/hard" element={<WordleHard />} />
          <Route path="/rules" element={<RulePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
