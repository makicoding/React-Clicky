import React, { Component } from "react";
import "./Clicky.css";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.getElementsByClassName("myCounter")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
  }

  componentDidUpdate() {
    document.getElementsByClassName("myCounter")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
  }

  handleBtnClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return(
      <div>
        <Nav />
          <Container>
            <div className="mainContent">
              <h1 className="myCounter"></h1>
              <button onClick={this.handleBtnClick}>Click Me!</button>
              <h1>{this.state.count}</h1>
            </div>
          </Container>
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