import './App.css';
import React from 'react';
import { Navbar, FullPost } from './components/organism';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { 
  Home,
  Post,
  NotFound
} from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="*" element={ <NotFound /> } />
        <Route path="/Home" element={<Home />} />
        <Route path="/Explore" element={<Post />} />
        <Route path="/Post" element={<Post />}>
          <Route path=':id' element={<FullPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
