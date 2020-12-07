import React from "react";
import Navigation from "./navigation";
import GridLayout from "./gridlayout";
import AnimatedBackground from "./animatedBackground";

export default class Home extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = { 
      windowWidth: window.innerWidth, 
      windowHeight: this.getMaxHeight() + 600,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', () => {this.handleResize()}, true);
  }

  getMaxHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  handleResize = () => {
    this.setState({ 
      windowWidth: window.innerWidth, 
      windowHeight: this.getMaxHeight(),
    });
  };
    
  render(){
    return(
      <div>
        <div className= "components-above-anim">
          <Navigation />
          <GridLayout />
        </div>
        
        <AnimatedBackground animationHeight={this.state.windowHeight} animationWidth= {this.state.windowWidth}/>
      </div>
    ); 
  }
}
