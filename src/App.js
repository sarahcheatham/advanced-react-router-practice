import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Comments from "./components/Comments";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";


function App() {
  return (
    <BrowserRouter>
      <div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
          <Switch>
            <Route path="/comments" component={Comments}/>
            <Route path="/" component={Dashboard}/>
            {/* PUT YOUR ROUTES HERE */}
          </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;
