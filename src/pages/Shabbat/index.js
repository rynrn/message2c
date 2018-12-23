import React, { Component } from 'react';
import './index.css';
import { Input, Name } from '../../components';

class Shabbat extends Component {
  render() {
    return (
		<div className="Shabbat">
			<div className="title-holiday"></div>
			<div className="img">
				<div className="star"></div>
				<div className="candel candel-1"></div>
				<div className="candel candel-2"></div>
				<div className="candel candel-3"></div>
				<div className="candel candel-4"></div>
				<div className="candel candel-5"></div>
			</div>
			<div className="blessing">
			מי ייתן והנרות שלך יאירו והלב שלך יתמלא בשמחה.
			
			השולחן יהיה תמיד עמוס במאכלים טעימים וסביב חברים טובים.
			
			חג חנוכה שמח!
			
			<Name/>
			</div>
			<Input/>
		</div>
    );
  }
}

export default Shabbat;
