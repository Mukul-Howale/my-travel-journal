import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card"
import Data from "./Data";
import './styles/App.css';

function App() {
  const data = Data.map(data => {
    return (
      <>
        <Card
          key={data.id}
          {...data}
        />
        {data.id !== Data.length && <hr></hr>}
      </>
    )
  })
  return (
    <div className="app">
      <Header/>
      <div className='card-div'>
        {data}
      </div>
    </div>
  );
}

export default App;
