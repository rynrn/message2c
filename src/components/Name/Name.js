import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
  render() {
	const params = new URLSearchParams(window.location.search);

    return (
		<div className="blessing-name">😊{params.get('name')}😊</div>
    );
  }
}

export default Name;
