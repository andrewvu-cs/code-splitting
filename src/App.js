import React, {useState} from 'react';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import logo from './logo.svg';
import './App.css';

function App() {

  const [route, setRoute] = useState('page1')

  const onRouteChange = (route) => {
    setRoute({route: route})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcom to React</h1>
      </header>
      <Page1 onRouteChange={onRouteChange}/>
      <Page2 onRouteChange={onRouteChange}/>
      <Page3 onRouteChange={onRouteChange}/>
    </div>
  );
}

export default App;
