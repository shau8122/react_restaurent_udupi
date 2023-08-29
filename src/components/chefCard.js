import React from 'react';
import img18 from './images/Facebook-logo.svg';
import img19 from './images/Twitter-logo.svg';
const ChefCard = (props) => {
  let url1="https://www.facebook.com/";
  let url2="https://www.instagram.com/";
  let url4="https://www.twitter.com/";
  return (
    <div className="chefs-box">
        <div className="chefs-card-box">
          <div className="chefs-image">
            <img src={props.chefImage} alt=""/>
          </div>

          <div className="chef-social">
            <div className="chef-social-content">
              <div className="chef-social-a"><a href={url1} ><img
                    src={img18} alt=""/></a></div>
              <div className="chef-social-a"><a href={url4} ><img
                    src={img19} alt=""/></a></div>
              <div className="chef-social-a"><a href={url2}><img
                    src={img18} alt=""/></a>
              </div>
            </div>
          </div>
        </div>
        <p>{props.chefName}</p>
      </div>
  );
}

export default ChefCard;
