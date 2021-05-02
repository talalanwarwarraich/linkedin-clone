import "./widgets.styles.scss";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const widgetsArticle = (title, subtitle) => {
		return (
			<div className="widgets-article">
				<div className="article-left">
					<FiberManualRecordIcon />
				</div>
				<div className="article-right">
					<h4>{title}</h4>
					<p>{subtitle}</p>
				</div>
			</div>
		);
	};
	return (
		<div className="widgets">
			<div className="widgets-header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{widgetsArticle(
				"Breaking News",
				"I am making this project for my job interview."
			)}
			{widgetsArticle(
				"Coronavirus - Deaths",
				"The death ration is increasing day by day due to corona."
			)}
			{widgetsArticle(
				"Elon Musk",
				"Elon Musk is introducint new technologies everyday."
			)}
			{widgetsArticle(
				"Javascript - News Letter",
				"Javascript is a popular language. And you should learn this."
			)}
			{widgetsArticle(
				"React.js - Javascript",
				"React.js is a very powerful javascript framework. Which is in high demand now a days."
			)}
		</div>
	);
}

export default Widgets;
