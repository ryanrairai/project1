import React from "react";
import avatar from './img_avatar.png';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
			<div class="card">
				<img src={avatar} alt="Avatar"/>
				<div class="container">
					<h4><b>John Doe</b></h4> 
					<p>Web Developer & Computer Programmer</p> 
				</div>
			</div>
        	<div class="col-lg-5">
				<h2 class="font-weight-light">About Me</h2>
				<p>
				I can say that I am a responsible and a hard-working person. Moreover, being a sociable person, I have many friends since I like to communicate with people and get to know new interesting individuals. I enjoy my time at school: it is really nice to study, the students are very friendly and ready to help. The atmosphere cannot but make me want to go there every time. I like to receive and deal with challenging tasks. I am a very enthusiastic student and I think this is a strong point of mine.
			</p>
			<a href="resume.docx" download>
				<button>Download CV</button>
			</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
