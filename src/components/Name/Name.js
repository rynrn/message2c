import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
	constructor (props) {
		super(props);

		this.state = {
			name: ''
		};
	}

	componentWillMount() {
		const params = new URLSearchParams(window.location.search);	
		this.setState({
			name: params.get('name')
		});
	}

  render() {
    return (
		<div className="blessing-name">😊{this.state.name}😊</div>
    );
  }
}

export default Name;
