import React, { Component } from 'react';
import classNames from 'classnames';
import './ShareButton.css';
import { FACEBOOK, WHATSAPP } from '../../constants/app';
import { event } from '../../services/analytics';

class ShareButton extends Component {
  constructor(props) {
	super(props);
    this.onClick = this.onClick.bind(this);
	
  }
  
  onClick() {
		if (this.props.type === WHATSAPP) {
			event('share', 'engagement', 'method', WHATSAPP);
			window.location.href = `whatsapp://send?text=${this.getMessage(this.props.name)}`;
		}
		else if (this.props.type === FACEBOOK) {
			event('share', 'engagement', 'method', FACEBOOK);
			window.FB.ui({ method: 'share', href: `${window.location.origin + window.location.pathname}?n=${this.props.name}` },
				function(response) {
					if (response && !response.error_message) {
						event('share', 'facebook', 'completed', 'completed');
					} else {
						event('share', 'facebook', 'error', 'error');
					}
				}
			);
		}
  }
  
  getMessage(name) {
		let origin = '',pathname = '';
		if (typeof(window) !== 'undefined') {
			origin = window.location.origin;
			pathname = window.location.pathname;
		}
		return `${this.props.whatsappMessage.replace('{NAME}', name)}
			👇👇👇
			${origin + pathname}/?n=${encodeURIComponent(name)}
			`
  }
  
  render() {
	const { type, position, children } = this.props;
	const cls = classNames('share-button', {[`share-button--${position}`]: !!position}, {[`share-button--${type}`]: !!type});
    return (
		<button className={cls} onClick={this.onClick}>{children}</button>
    );
  }
}

export default ShareButton;
