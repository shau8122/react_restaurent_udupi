import img7 from './images/dis1.jpg';
import img8 from './images/dis2.jpg';
import img9 from './images/dis3.jpg';
import './css/about.css';
function about(){
  return(
    <div id="aboutus" className="box">
    <div className="aboutus-heading">
      <h1>About us </h1>
    </div>
    <div className="aboutus-content">
      <div className="aboutus-para">
        <p>Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale,
          ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused
          takeout food.</p>
      </div>
      <div className="aboutus-pic">
        <div className="aboutus-pic-box" id="pic1">
          <div>
            <img src={img7} alt="Dish"/>
            <p>Delicious Pizza</p>
          </div>
        </div>
        <div className="aboutus-pic-box" id="pic2">
          <div>
            <img src={img8} alt="Dish"/>
            <p>Delicious Fried Rice</p>
          </div>
        </div>
        <div className="aboutus-pic-box" id="pic3">
          <div>
            <img src={img9} alt="Dish"/>
            <p>Delicious Meat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default about;
