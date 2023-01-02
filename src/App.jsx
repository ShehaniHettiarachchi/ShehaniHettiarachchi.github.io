import React from "react";
import contact from  "./components/contact";
import footer from  "./components/footer";
import portfolio from  "./components/portfolio";
import Intro from  "./components/Intro";
import timeline from  "./components/timeline";


function App() {

  return (
    <div className="App">
      <Intro />
      <contact />
      <portfolio />
      <footer />
      <timeline/>
    </div>
  )
}

export default App
