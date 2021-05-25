import React from "react";
import { Link, withRouter } from "react-router-dom";

function Projects(props) {
  return (
    <div className="project">
      <div class="container">
        <div class="column align-items-center my-5">
			<div class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`} >
                <Link class="nav-link" to="/ProjectSub">
                    <div class="card-horizontal">
						<h5>Project 1</h5>
					</div>                               
                </Link>
			</div>
			<div class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`} >
                <Link class="nav-link" to="/ProjectSub">
                    <div class="card-horizontal">
						<h5>Project 2</h5>
					</div>                               
                </Link>
			</div>
			<div class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`} >
                <Link class="nav-link" to="/ProjectSub">
                    <div class="card-horizontal">
						<h5>Project 3</h5>
					</div>                               
                </Link>
			</div>
		</div>
      </div>
    </div>
  );
}

export default withRouter(Projects);
