import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavBar, Footer, Home, About, Login, Register, MyPlans } from "./components"

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path ="/login" exact component={() => <Login />} />
            <Route path="/register" exact component={() => <Register />} />
            <Route path="/myPlans" exact component={() => <MyPlans />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )

  }
}

export default App;
