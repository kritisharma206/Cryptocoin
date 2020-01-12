import React from 'react';
import "./components/css/App.css"
import GetCoinsList from './components/GetCoinsList';

function App() {
  return (
    <div className="App">
      <div className="headingStyles">
        {/* Title */}
          <h1>Crypto Wiki</h1>
          <GetCoinsList/>
        </div>
    </div>
  );
}

export default App;