import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './MomDay.scss';
import { NameGenerate, Name } from '../../components';

class MomDay extends Component {
  render() {
    return (
		<div className="mom-day">
			<Helmet>
				<title>לאמא האחת והיחידה - יום האם חוזר!</title>
				<meta property="og:title" content="לאמא האחת והיחידה - יום האם חוזר!" />
				<meta property="og:image" content="/images/cards/MomDay-display.jpg" />
				<meta name="description" content="יום האם חוזר" />
				<meta name="keywords" content="ברכה לאמא, ברכה ליום האם, ברכת אהבה לאמאת, יום האם חוזר, יוחזר יום האם" />
			</Helmet>
			<div>
				<iframe
					className="mom-day__iframe"
					title="youtube"
					width="560" height="315"
					src="https://www.youtube.com/embed/LWjj3cjeMEc"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
				<div className="mom-day__image"></div>
				<div className="mom-day__wrap-images">
					<div className="mom-day__img1"></div>
					<div className="mom-day__img2"></div>
				</div>

				<h1 className="mom-day__title">יום האם שמח לאמא האחת והיחידה!</h1>
				<div className="mom-day__name">
					<Name/>
				</div>
				<p className="mom-day__hashtag">#זה_היום_שלך</p>
				<div className="mom-day__wrap-images">
					<div className="mom-day__img3"></div>
					<div className="mom-day__img4"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="יום האם שמח!" buttonStyle="CP5"/>
		</div>
    );
  }
}

export default MomDay;
