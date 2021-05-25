import React from "react";

function Contact() {
  	return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h2 class="font-weight-light">My Contacts</h2>
              <p>Email address: cmarush2@gmail.com</p>
			  <p>Phone Number: +254 707 447414</p>
			  <p>Twitter: @cmarush</p>
          </div>
          <div class="col-lg-5">
		  <h4>Leave a message</h4>
            <form action="">
				<label for="fname">First Name</label>
				<input type="text" id="fname" required name="firstname" placeholder="Your name.."/>

				<label for="lname">Last Name</label>
				<input type="text" id="lname" required name="lastname" placeholder="Your last name.."/>
				
				<label for="message">Message</label>
				<input type="text" id="message" required name="message" placeholder="Type in your message.."/>

				<input onclick="" type="button" value="Send Message"/>
				<script>
					function showAlert(){
						alert("Hey {user's name} your message sent successfully")
					}
				</script>
			</form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
