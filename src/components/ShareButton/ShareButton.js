import React, { Component } from 'react';
import classNames from 'classnames';
import './ShareButton.css';
import { event } from '../../services/analytics';

class ShareButton extends Component {
  constructor(props) {
	super(props);
    this.onClick = this.onClick.bind(this);
	
  }
  
  onClick() {
		if (this.props.type === 'whatsapp') {
			event('share', 'engagement', 'method', 'whatsapp');
			window.location.href = `whatsapp://send?text=${this.getMessage(this.props.name)}`;
		}
		else if (this.props.type === 'facebbok') {
			event('share', 'engagement', 'method', 'facebbok');
			window.FB.ui({ method: 'share', href: `${window.location.origin + window.location.pathname}?n=${this.props.name}` },
				function(response) {
					if (response && !response.error_message) {
						alert('Posting completed.');
					} else {
						alert('Error while posting.');
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
		return `${this.props.whatsappMessage}
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
