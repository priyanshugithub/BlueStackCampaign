import React from 'react';
import Header from './components/Header/Header.component';
import CampaignBoard from './components/CampaignBoard/CampaignBoard.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <CampaignBoard />
    </div>
  );
}

export default App;
