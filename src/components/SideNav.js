import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/comments"> <i className="fa fa-fw fa-dashboard" />
            Comments
          </Link>
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
        </li>
        <li>
          <a href="charts.html">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </a>
        </li>
        <li>
          <a href="tables.html">
            <i className="fa fa-fw fa-table" /> Tables
          </a>
        </li>
      </ul>
    </div>);  
}

export default SideNav;
