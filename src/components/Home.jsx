import React from "react";
import image from './download.png';

function Home() {
  return (
    <div className="home">
	<div class="container">
        <div class="row align-items-center my-5">

          <div class="col-lg-5">
            <h1 class="font-weight-light">John Doe</h1>
            <div class="circle">
			
			</div>
			<div class="circle2">
			</div>
          </div>
			<div class="col-lg-7">
				<img
				src={image}
				alt="portfolio"
				/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
