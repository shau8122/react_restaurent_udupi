import './css/nav.css';
import img1 from './images/logo.png';
function nav(){
  return(
    <div className="top-section">
     <div className="nav">
       <div className="logo">
         <div className="logo-item">
           <img src={img1} alt="logo"/>
         </div>
         <div className="logo-item">
          <p>
            Udupi
          </p>
         </div>
       </div>
       <ul className="navigation-bar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#menu">Features</a></li>
        <li><a href="#chefs">Chefs</a></li>
        <li><a href="#contact-us-form">Contact Us</a></li>
       </ul>
     
      </div>
   </div>
  
  );
}
export default nav;