import img10 from './images/menu1.jpg';
import img11 from './images/menu2.jpg';
import img12 from './images/menu3.jpg';
import img13 from './images/menu4.jpg';
import img14 from './images/menu5.jpg';
// import cart from "./images/cart.png"
import './css/menu.css';
import Card from "./Card";
function menu(){
  return(
  <div className="box" id="menu">
    <div className="menu-text-section">
      <div className="menu-section-text">
        <p>--Menu</p>
        <h1>Our selection of cakes  with quality taste</h1>
      </div>
    </div>

    <div className="menu-container" id="menu-container-1">
      <div className="menu-inside">
        <Card image={img10} price="90" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img11} price="60" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img12} price="80" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img13} price="120" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img14} price="150" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img11} price="90" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img12} price="60" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img14} price="80" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img10} price="120" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
        <Card image={img13} price="150" foodName="Chocolate cake" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad nesciunt totam quas ea quia!" />
      </div>
    </div>
  </div>
  );
}
export default menu;

