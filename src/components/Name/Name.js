import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import './Name.scss';

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
	if (isEmpty(this.state.name)) {
		return null;
	}

	const emojiElement = isEmpty(this.props.emoji) ? '' : <span role="img" aria-label="emoji">{this.props.emoji}</span>;
    return (
		<div className="blessing-name">
			{emojiElement}
			{this.state.name}
			{emojiElement}
		</div>
    );
  }
}

export default Name;
