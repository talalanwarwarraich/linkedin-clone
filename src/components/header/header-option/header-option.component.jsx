import "./header-option.styles.scss";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user-slice";

function HeaderOption({ avatar, Icon, title, onClick }) {
	const user = useSelector(selectUser);
	return (
		<div onClick={onClick} className="header-option">
			{Icon && <Icon className="icon" />}
			{avatar && <Avatar className="icon">{user.email[0]}</Avatar>}
			<h3 className="title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
