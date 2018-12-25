import { map } from 'lodash';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
	Hanuka,
	Shabbat,
	Morning,
	Love
} from './pages';

const Index = () => <h2>Home</h2>;
const Users = () => <h2>Users</h2>;

const footerMenu = [
	{
		title: "חגים",
		items: [{url: "/Hanuka", content: "חנוכה"}, {url: "/Shabbat", content: "שבת "}, {url: "/Morning", content: "בוקר טוב "}, {url: "/Love", content: "Love "}]
	},
	{
		title: "bla",
		items: [{url: "http://google.com", content: "google"}, {url: "http://fb.com", content: "fb"}, {url: "http://tw.com", content: "tw"}]
	},
	{
		title: "foo foo",
		items: [{url: "http://google.com", content: "google"}, {url: "http://fb.com", content: "fb"}, {url: "http://tw.com", content: "tw"}]
	}
]

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/Hanuka/" component={Hanuka} />
			<Route path="/Shabbat/" component={Shabbat} />
			<Route path="/Morning/" component={Morning} />
			<Route path="/Love/" component={Love} />
      <Route path="/users/" component={Users} />
	  {/* <footer className="footer">
		<nav>
			{map(footerMenu, (section, i) => (
				<ul key={i} className="footer-list-top">
					<li><h4 className="footer-list-header">{section.title}</h4></li>
					{map(section.items, (item, j) => (
						<li key={j}><a href={item.url} className="generic-anchor footer-list-anchor" itemProp="significantLink">{item.content}</a></li>
					))}
				</ul>
			))}
		  </nav>
	  </footer> */}
    </div>
  </Router>
);

export default AppRouter;