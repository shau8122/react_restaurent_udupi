import './css/form.css';
import React, {useState} from 'react';
function Contact(){
  const [myStyle, setMyStyle] = useState("red");
  const [textRes, setTextRes] = useState("Make Reservation");
  const [text, settext] = useState("");
  const nameText=(e) =>{
    settext(e.target.value)
  }
  const handleRes=()=>{
    if (text!=="") {
      setTextRes("Reservation Made")
      setMyStyle("green")
    }
  }

  // console.log(text)
  return (
  <div id="contact-us-form" className="box">
    <div className="form">
      <div className="contact-form">
        <div className="contact-form-text">
          <h1>Contact Us</h1>
          <h3>Here You Can Make A Reservation Or Just walkin to our cafe</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam, asperiores quia temporibus
            expedita
            nemo. Vel illum facere reprehenderit enim.</p>
        </div>
        <div className="social-contact">
          <div className="mobile-contact">
            <h2>
              Phone Number
            </h2>
            <p>7654831436</p>
            <p>9304351922</p>
          </div>
          <div className="email-contact">
            <h2>Emails </h2>
            <p>Shaukatali28122001@gmail.com</p>
            <p>shau8122@iitkgp.kgpian.ac.in</p>
          </div>
        </div>
      </div>
      <div className="reservation-form">
        <h1>Table Reservation</h1>
        <div className="reservation-form-set">
          <form  method="post">
            <input onChange={nameText} type="text" name="name" placeholder="Enter your name" required/>
            <input type="email" name="email" className="email" placeholder="Enter your mail" required/>
            <input type="number" name="number" className="number" placeholder="Enter your mobile no." required/>
            <input type="text" name="no of guest" className="no og guest" placeholder="Enter no of guest" required/>
            <input type="date" name="date" id="" placeholder="" required/>
            <input type="time" name="time" id="" required/>
            <textarea name="massage" id="" cols="30" rows="10" placeholder="Enter massage"></textarea>
            <button className="btn2" style={{backgroundColor:myStyle}} onClick={handleRes}>{textRes}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Contact;