import "./header-option.styles.scss";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className="header-option">
			{Icon && <Icon className="icon" />}
			{avatar && <Avatar className="icon" src={avatar} />}
			<h3 className="title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
