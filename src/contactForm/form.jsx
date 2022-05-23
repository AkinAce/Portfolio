import React, {useState } from 'react';
import '../index.css';
import '../contactForm/css/form.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/1fa3dd30-c1ca-11ec-abfb-2b5c80ae2a8a";

const Form = () => {
	const [submitted, setSubmitted] = useState(false);
  	const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
	  <div className="formFeedback">
        <h2 id="formFeedback1">Thank you!</h2>
        <p id='formFeedback2'>I'll be in touch soon.</p>
	  </div>
      
    );
  }


    return ( 		
        <div class="contactContainer">
		<div class="formContainer">			
			<form 
				class="formFlex "
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method="POST"
				target="_blank"
			>				
				<div class="inputWrap inputWrapRes ">
                    <span class="inputLabel">Your Name</span>
					<input class="inputField" type="text" name="name"  required placeholder="Enter your name"/>
					<span class="inputLine"></span>
				</div>

				<div class="inputWrap inputWrapRes">
					<span class="inputLabel">Email</span>
					<input class="inputField" type="email" name="email"  required  placeholder="Enter your email address"/>
					<span class="inputLine"></span>
				</div>

				<div class="inputWrap messageField">
					<span class="inputLabel">Message</span>
					<textarea class="inputField" name="message"  required placeholder="Your message here..."></textarea>
					<span class="inputLine"></span>
				</div>

				<div class="submitButtonContainer">
					<button class="submitButton">
						<span>
							Submit
						</span>
					</button>
				</div>
			</form>

			
		</div>
	</div>
     );
}
 
export default Form;