import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  constructor(props) {
	super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  
  focusTextInput() {
    this.textInput.current.focus();
  }
  
  componentDidMount() {
	this.textInput.current.focus();
  }
  
  render() {
    return (
		<input className="form__field" type="text"
			placeholder="הקלד את שמך"
			onClick={this.focusTextInput}
			ref={this.textInput} />
    );
  }
}

export default Input;
