import img21 from './images/breakfast.png';
import img22 from './images/lunch.png';
import img23 from './images/dinner.png';
import img24 from './images/tab-item-06.png';
import img25 from './images/tab-item-05.png';
import img26 from './images/tab-item-04.png';
import img27 from './images/tab-item-03.png';
import img28 from './images/tab-item-02.png';
import img29 from './images/tab-item-01.png';
import React, {useState} from 'react';
import './css/week.css';
import WeekCard from './weekCard';
const Week=() =>{

  const [myStyle1, setmyStyle1] = useState({
    display:"block"
  });
  const [myStyle2, setmyStyle2] = useState({
    display:'none'
  });
  const [myStyle3, setmyStyle3] = useState({
    display:'none'
  });
  const toggleStyle1= () => {
    setmyStyle1({
      display: 'block'
    })
    setmyStyle2({
      display: 'none'
    })
    setmyStyle3({
      display: 'none'
    })
  }
  const toggleStyle2= () => {
    setmyStyle1({
      display: 'none'
    })
    setmyStyle2({
      display: 'block'
    })
    setmyStyle3({
      display: 'none'
    })
  }
  // const toggleStyle= (e) =>{
  //   console.log(e.target.id)
  // }
  const toggleStyle3= () => {
    setmyStyle1({
      display: 'none'
    })
    setmyStyle2({
      display: 'none'
    })
    setmyStyle3({
      display: 'block'
    })
  }
  return(
 <div className="week">
    <div className="week-heading">
      <p>KLASSY WEEK</p>
      <h1>This Week’s Special Meal Offers</h1>
    </div>
    <div className="switchover-container">
      <div className="week-switchover">
        <div id="week-breakfast" className="week-icon" onClick={toggleStyle1}>
          <a href="#breakfast-item"><img src={img21} alt=""/>
            <p>breakfast</p>
          </a>
        </div>
        <div id="week-lunch" className="week-icon" onClick={toggleStyle2}>
          <a href="#lunch-item"><img src={img22} alt=""/>
            <p>lunch</p>
          </a>
        </div>
        <div id="week-dinner" className="week-icon" onClick={toggleStyle3}>
          <a href="#dinner-item"><img src={img23} alt=""/>
            <p>dinner</p>
          </a>
        </div>
      </div>
    </div>
    <div id="breakfast-item" style={myStyle1} >
      <div className="week-item">
        <div className="week-list">
          <WeekCard image={img24} foodName="Fresh Chicken Salad" price="10"/>
          <WeekCard image={img25} foodName="Orange Juice" price="115"/>
          <WeekCard image={img26} foodName="Fruit Salad" price="55"/>
        </div>
        <div className="week-list">
          <WeekCard image={img27} foodName="Egg omelette" price="10"/>
          <WeekCard image={img28} foodName="Dollma Pire" price="115"/>
          <WeekCard image={img29} foodName="Omelette & Cheese" price="55"/>
        </div>
      </div>
    </div>
    <div id="lunch-item" style={myStyle2} >
      <div className="week-item">
        <div className="week-list">
          <WeekCard image={img26} foodName="Fruit Salad" price="30"/>
          <WeekCard image={img27} foodName="Egg omelette" price="85"/>
          <WeekCard image={img29} foodName="Omelette & Cheese" price="100"/>
        </div>
        <div className="week-list">
          <WeekCard image={img25} foodName="Orange Juice" price="150"/>
          <WeekCard image={img28} foodName="Dollma Pire" price="105"/>
          <WeekCard image={img24} foodName="Fresh Chicken Salad" price="99"/>
        </div>
      </div>
    </div>
    <div id="dinner-item" style={myStyle3} >
      <div className="week-item">
        <div className="week-list">
          <WeekCard image={img27} foodName="Egg omelette" price="120"/>
          <WeekCard image={img26} foodName="Fruit Salad" price="175"/>
          <WeekCard image={img29} foodName="Omelette & Cheese" price="100"/>
        </div>
        <div className="week-list">
          <WeekCard image={img24} foodName="Fresh Chicken Salad" price="65"/>
          <WeekCard image={img28} foodName="Dollma Pire" price="90"/>
          <WeekCard image={img25} foodName="Orange Juice" price="120"/>
        </div>
      </div>
    </div> 
  </div>
  );
}
export default Week;