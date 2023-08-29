import img18 from './images/Facebook-logo.svg';
import img19 from './images/Twitter-logo.svg';
// import img20 from './images/Instagram-logo.svg';
// import img30 from './images/Linkedin-logo.svg';

import img1 from './images/logo.png';
import './css/footer.css';
function foot(){
  let url1="https://www.facebook.com/";
  let url2="https://www.instagram.com/";
  let url3="https://www.linkedin.com/";
  let url4="https://www.twitter.com/";
  return(
    <footer id="contact us">
    <div className="social-media">
      <div className="social" id="social-contact1"><a href={url1}>
        <img src={img18} alt=""/></a></div>
      <div className="social" id="social-contact2"><a href={url2}>
        <img src={img18} alt=""/></a></div>
      <div className="social" id="social-contact3"><a href={url3}>
        <img src={img19} alt=""/></a></div>
      <div className="social" id="social-contact4"><a href={url4}>
        <img src={img19} alt=""/></a></div>
    </div>
    <div className="logo">
      <div className="logo-item">
        <a href="/">
          <img src={img1} alt="logo" id="logo"/>
        </a>
      </div>
      <div className="logo-item">
        <p>
          Udupi
        </p>
      </div>
    </div>
    <div className="copyright-section">
      <h3> &#169; Udupi Restaurent</h3>
    </div>
  </footer>
  );
}
export default foot;