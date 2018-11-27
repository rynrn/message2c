import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
	super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  
  focusTextInput() {
    this.textInput.current.focus();
  }
  
  render() {
    return (
		<input className="general-input" type="text"
			placeholder="הקלד את שמך"
			onClick={this.focusTextInput}
			ref={this.textInput} />
    );
  }
}

export default Input;
