import React, { Component } from 'react';
import classNames from 'classnames';
import './SendButton.scss';

class SendButton extends Component {
  render() {
	const { type, position } = this.props;
	const cls = classNames('btn', {[`btn--${position}`]: !!position}, {[`btn--${type}`]: !!type});
    return (
		<button className={cls} >{this.props.children}</button>
    );
  }
}

export default SendButton;
