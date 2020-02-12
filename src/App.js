import React, { useState } from "react";
import Page1 from "./components/Page1";
import "./App.css";

import AsyncComponent from './components/AsyncComponent'

function App() {
  const [route, setRoute] = useState("page1");
  // const [component, setComponent] = useState('')

  const onRouteChange = route => {
    // No Code Splitting
    setRoute( route );

    // With Code Splitting - dynamic importing
    // if (route === 'page1'){
    //   setRoute(route);
    // }else if (route === 'page2'){
    //   import('./components/Page2')
    //     .then((Page2)=> {
    //       setRoute(route);
    //       setComponent(Page2.default)
    //     })
    // } else if(route === 'page3'){
    //   import('./components/Page3')
    //     .then((Page3) => {
    //       setRoute(route);
    //       setComponent(Page3.default)
    //     })
    // }
  };
  
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} />;
    } else if (route === "page2") {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={onRouteChange} />;
    } else if (route === "page3") {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={onRouteChange} />;
    }
    // if(route === 'page1'){
    //   return <Page1 onRouteChange={onRouteChange}/>
    // } else 
    // {return <this.state.component onRouteChange={onRouteChange}/>}

}

export default App;
