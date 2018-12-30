import React, { Component } from 'react';
import classNames from 'classnames';
import './SendButton.css';

class SendButton extends Component {
  constructor(props) {
	super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
	  
  }
  
  render() {
	const { type, position } = this.props;
	const cls = classNames('btn', {[`btn--${position}`]: !!position}, {[`btn--${type}`]: !!type});
    return (
		<button className={cls} onClick={this.onClick}>{this.props.children}</button>
    );
  }
}

export default SendButton;
