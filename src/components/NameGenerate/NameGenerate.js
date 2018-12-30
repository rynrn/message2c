import React, { Component } from 'react';
import classNames from 'classnames';
import { isEmpty, trim } from 'lodash';
import { Input, SendButton, ShareButton } from '../';
import './NameGenerate.css';

class NameGenerate extends Component {
  constructor(props) {
	super(props);
	this.state = {
		showForm: true,
		name: ''
	};
    this.textInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
	e.preventDefault();
	const name = trim(this.textInput.current.textInput.current.value);
	if(isEmpty(name)) {
		alert('הקלד שם');
	}
	else {
		this.setState({
			showForm: false,
			name
		});
	}
  }
  
  render() {
	const { showForm, name } = this.state;
	const { whatsappMessage, buttonStyle } = this.props;
	const nameGenerateFormCls = classNames('name-generate-form', {'name-generate-form--hidden': !showForm});
	const shareButtonsCls = classNames('share-buttons', {'share-buttons--show': !showForm});
	const btnStyle = buttonStyle || 'primary';
    return (
		<div className="wrapper-actions">
			<div className="inner-actions">
				<form className={nameGenerateFormCls} onSubmit={this.onSubmit}>
					<Input ref={this.textInput}/>
					<SendButton type={btnStyle} position="inside">שלח</SendButton>
				</form>
				<div className={shareButtonsCls}>
					<ShareButton 	type="facebook" position="top" name={name}>שתפו בפייסבוק</ShareButton>
					<ShareButton 	whatsappMessage={whatsappMessage}
												type="whatsapp"
												position="bottom"
												name={name}>שתפו בוואטסאפ</ShareButton>
				</div>
			</div>
		</div>
    );
  }
}

export default NameGenerate;
