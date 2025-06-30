import React, { Component } from "react";
import Navbar from "../Navbar"
import {Link} from "react-router-dom"
import "./index.css"

class Home extends Component{
state={}

handleHelpClick = () => {
  window.open("https://wa.me/919492116537", "_blank", "noopener,noreferrer");
}

render(){
    return <>
        <Navbar />
        <div className="home-container">
          <div className="home-top-container">
           <div className="home-left-container">
              <h1 className="home-main-heading">Aam Bazar</h1>
              <p className="home-main-paragraph">Enjoy premium, farm-fresh mangoes at unbeatable prices! Grown organically without chemicals, our mangoes are packed with rich flavor and natural sweetness. We ensure top quality and health benefits in every bite. Order today and experience the freshness—delivered straight to your doorstep within 24 hours. Taste the difference of real, organic mangoes—fresh, healthy, and fast!</p>
              <button className="home-button"><Link to="/products" className="remove-blue-underline">Get Your First Box</Link></button>
           </div>
           <div className="home-right-container"><img src="https://th.bing.com/th/id/R.6f71edd585f31d84a19c20803c9901ff?rik=MWptQQTofWV%2bLA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fMango-Transparent.png&ehk=AEQkdSbMr5l1rehTamvKOnSfXosQuQShBnvnW%2bpTjWk%3d&risl=&pid=ImgRaw&r=0" className="home-mango-image" alt="home mango"/></div>
          </div>
          <div className="home-bottom-container">kdfjkdhfbhjsfbhjsdbfhbfbsdbfh</div>
        
        </div>

        <div className="help-button-container"><button className="help-button" onClick={this.handleHelpClick}>help me</button></div>
    </>
}

}
export default Home