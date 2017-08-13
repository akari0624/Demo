import React, {Component} from 'react';
import './style.css';


export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };

    this.addCount = this.addCount.bind(this);
  }

  addCount = () => {
    this.setState({
      counter: this.state.counter += 1
    });
  }

  render() {

    const styleObj = {color: 'red'};
    return (
      <div>
        <h1 style={styleObj}>{this.state.counter}</h1>
        <div className="clickableDiv" onClick={() => { alert('Hi'); }}>Click me</div>
        <div className="blueT">Hello in BLUE</div>
        <button className="clickableDiv" onClick={this.addCount}>Click me to plus one</button>
      </div>
    );
  }

}
