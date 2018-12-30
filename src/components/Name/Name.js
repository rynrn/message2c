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
		if (typeof(window) !== "undefined" && typeof(URLSearchParams) !== "undefined") {
			const params = new URLSearchParams(window.location.search);	
			this.setState({
				name: params.get('n')
			});
		}
	}

  render() {
		const emoji = this.props.emoji || '';
    return (
			<div className="blessing-name">
				<span role="img" aria-label="emoji">{emoji}</span>
				{this.state.name}
				<span role="img" aria-label="emoji">{emoji}</span>
			</div>
    );
  }
}

export default Name;
