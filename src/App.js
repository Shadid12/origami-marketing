import React from 'react';

//pages
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';

// components
import Hamburger from "./components/Hamburger";
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <div className="App">
      <Hamburger />
      <LandingPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
