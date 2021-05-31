import React from 'react'; 
import './styles/App.css'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="scroll">
        <Home/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;