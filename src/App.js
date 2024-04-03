// App.js
import React from 'react';
import About from './components/about';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
