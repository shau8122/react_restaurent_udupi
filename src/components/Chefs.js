import img15 from './images/chef1.jpg';
import img16 from './images/chef2.jpg';
import img17 from './images/chef3.jpg';
// import img18 from './images/Facebook-logo.svg';
// import img19 from './images/Twitter-logo.svg';
// import img20 from './images/Instagram-logo.svg';
// import img30 from './images/Linkedin-logo.svg';
import './css/chef.css';
import ChefCard from './chefCard';
function Chefs(){
  // let url1="https://www.facebook.com/";
  // let url2="https://www.instagram.com/";
  // let url4="https://www.twitter.com/";
  return(
  <div id="chefs" className="box">
    <div className="chefs-text">
      <p className="yes">OUR CHEFS</p>
      <h1>We offer the best ingredients for you.</h1>
    </div>
    <div className="chefs-card">
      <ChefCard chefImage={img15} chefName="Jamie Oliver"/>
      <ChefCard chefImage={img16} chefName="Rick Stein"/>
      <ChefCard chefImage={img17} chefName="Nigella Lawson"/>
    </div>
  </div>
  )
}
export default Chefs;