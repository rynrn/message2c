import React, { Component } from 'react';
import classNames from 'classnames';
import './ShareButton.css';
import FB from 'fb';

class ShareButton extends Component {
  constructor(props) {
	super(props);
    this.onClick = this.onClick.bind(this);
	
  }
  
  onClick() {
	debugger
	if (this.props.style === 'whatsapp') {
		window.location.href = `whatsapp://send?text=${this.getMessage(this.props.name)}`;
	}
	else if (this.props.style === 'facebbok') {
		FB.ui(
		  {
			method: 'share',
			href: `${window.location.origin}?name=${this.props.name}`,
		  },
		  // callback
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
	  return `${name}ה מיוחדת מ *לולי*
			%0A
			פתח את הקישור ותגלה מהי
			👇👇👇%0Amessage4u.co/?n=%D7%9C%D7%95%D7%9C%D7%99`;
  }
  
  render() {
	const { style, position, children } = this.props;
	const cls = classNames('share-button', {[`share-button--${position}`]: !!position}, {[`share-button--${style}`]: !!style});
    return (
		<button className={cls} onClick={this.onClick}>{children}</button>
    );
  }
}

export default ShareButton;
