import React, { Component } from "react";
import "./Global.css";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "../components/Grid";

// Run "npm i" or "npm i [specific component name]" if there are any dependencies missing in the node modules folder

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    // state is an object
      count: 1000,
      amount1: 100,
      amount2: 500,
      amount3: 1000,
      amount4: 5000
    }
  }

  // The componentDidMount() method is called after the component is rendered.
  // This is where you would write any javascript to set how the page initially looks.
  // You can also just use componentDidUpdate and not use componentDidMount() altogether.
  componentDidMount() {
    document.getElementsByClassName("myCounter")[0].innerHTML = `You have: $${this.state.count} in your account`;   // We are using a template literal here
  }

  // The componentDidUpdate method is called after the component is updated in the DOM.
  // This is where you would write any javascript to make changes to the page such as when a user clicks a button..
  componentDidUpdate() {
    document.getElementsByClassName("myCounter")[0].innerHTML = `You have: $${this.state.count} in your account`;   // We are using a template literal here
    if (this.state.count >= 10000) {
      document.getElementsByClassName("message")[0].innerHTML = "Keep going until $50K!";
      document.getElementsByClassName("message")[0].style.color = "orange";
    }
    if (this.state.count >= 50000) {
      document.getElementsByClassName("message")[0].innerHTML = "You are doing well!<br />Now keep going until $100K!";
      document.getElementsByClassName("message")[0].style.color = "blue";
    }
    if (this.state.count >= 100000) {
      document.getElementsByClassName("message")[0].innerHTML = "YOU ARE RICH!!";
      document.getElementsByClassName("message")[0].style.color = "blue";
    }
  }

  // Here we are just declaring a regular javascript function (you can call the function anything you want)
  handleButtonClick1 = () => {
    this.setState({count: this.state.count + this.state.amount1})
  }

  handleButtonClick2 = () => {
    this.setState({count: this.state.count + this.state.amount2})
  }

  handleButtonClick3 = () => {
    this.setState({count: this.state.count + this.state.amount3})
  }

  handleButtonClick4 = () => {
    this.setState({count: this.state.count + this.state.amount4})
  }

  render() {
    return(
      <div>

        <Navbar />

        <div className="mainContent">

          {/* Put any bootstrap elements into className="container" to set max width to 960px and have it centered on page. 
              Here, Container is referenced from Grid inside the components folder. */}
          <Container>         

            <Row>
              <Col size="col-md-8 offset-md-2">
                <h1 className="myCounter textCenter"></h1>
                <br></br>
                <h4 className="textCenter">Choose amount to deposit:</h4>
                <br></br>
              </Col>
            </Row>

            <Row>
              <Col size="col-md-4 offset-md-4">
                {/* In the following, the $ sign here is just a regular string */}
                <button className="button1" onClick={this.handleButtonClick1}>${this.state.amount1}</button>
                <br></br>
                <button className="button1" onClick={this.handleButtonClick2}>${this.state.amount2}</button>
                <br></br>
                <button className="button1" onClick={this.handleButtonClick3}>${this.state.amount3}</button>
                <br></br>
                <button className="button1" onClick={this.handleButtonClick4}>${this.state.amount4}</button>
              </Col>
            </Row>

            <br></br>
            
            <Row>
              <Col size="col-md-8 offset-md-2">
                <h1 className="message textCenter"></h1>
              </Col>
            </Row>

          </Container>
          
        </div>

        {/* Position of Navbar if the CSS position is fixed: */}
        {/* <Navbar /> */}
      </div>
    )
  }
}

export default App;



// class Header extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 2000)
//   }

//   componentDidUpdate() {
//     document.getElementById("mydiv").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }

//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="mydiv"></div>
//       </div>
//     );
//   }
// }

// export default Header;