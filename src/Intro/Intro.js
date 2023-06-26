import React from 'react'
import Instagram from '../asset/images/Instagram.png'
import Facebook from '../asset/images/facebook.png'
import Linkdin from '../asset/images/linkedin.png'
import MyPhoto from '../asset/images/transparncy.png'
import BackgroundPhoto from '../asset/images/transparncy new.png'
// import MyPhoto from '../asset/images/transparncy new.png';
import './Intro.css'

class Intro extends React.Component {
  render () {
    function hireMe () {
      document.getElementById('phoneNumbe').style.display = 'block'
    }
    return (

            <div className="intro-container">
                <div className="i-left">
                    <div className="i-name">
                        <span className="s-name">I AM HAILEMELEKOT MELAKIE</span>
                        <span className="s-description"> I am a frontend and backend software developer.</span>
                        <button onClick={hireMe} className="btn hire-me">Hire_Me</button>
                        <div style={{ display: 'none' }} id="phoneNumbe"> Call To: +251 947 053 537</div>
                        <div className="i-blur1"></div>
                    </div>
                    <div className="s-m-icons">
                        <a target="__blank" href="www.linkedin.com" ><img className="icons" src={Linkdin} alt="icons" /></a>
                        <a target="__blank" href="www.facebook.com"><img className="icons" src={Facebook} alt="icons" /></a>
                        <a target="__blank" href="www.instagram.com"><img className="icons" src={Instagram} alt="icons" /></a>
                    </div>
                </div>
                <div className="i-right">
                    <div>
                        {/* <div className="i-blur2"></div> */}
                        <img className="img-responsive2" src={BackgroundPhoto} alt="MinePhoto" />
                        <img className="img-responsive1" src={MyPhoto} alt="MainePhoto" />
                    </div>
                </div>
            </div>
    )
  }
}
export default Intro
