import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <Button color="info">info</Button>
      <Button color="danger">danger</Button>
      <Button color="success">success</Button>
    </div>
  );
}

export default App;
