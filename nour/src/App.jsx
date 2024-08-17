
import React, {Component} from "react";

class App extends Component {
  constructor(){
    super()
    this.state = {
      number: 0
    }
  }
  clickHander(){
    this.number = 1
  }
  render(){
 

    return(
      <div>
              <h1>{this.state.number}</h1>
              <button onClick={this.clickHander}>click me!</button>
      </div>
    )
  }
}

export default App