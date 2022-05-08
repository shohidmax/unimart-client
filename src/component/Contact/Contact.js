import React from "react";
import "./Contact.css";

const Contact = () => {
  const HandleForm = () =>{
    alert('Thank You For Your Contact');
  }
  return (
    
      <div className="bg-info p-2 text-dark bg-opacity-25 container border bordrt-primary">
          <h2>Contact us</h2>
          <div className="row">
              <div className="col-md-6">
                  <form className="mt-3" onSubmit={HandleForm}>
                  <div class="mb-3">
                         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required/>
                    </div>
                  <div class="mb-3">
                         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" required/>
                    </div>
                  <div class="mb-3">
                         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" required/>
                    </div>
                    <div class="mb-3">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Comment " required></textarea>
                    </div>
                    <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Contact"/>
                  </form>

              </div>
              <div className="col-md-6">
                  <img className="img-fluid" src="https://i.ibb.co/w6Z30LS/Background.png" alt="" />

              </div>
          </div>
          
        
      </div>
    
  );
};

export default Contact;
