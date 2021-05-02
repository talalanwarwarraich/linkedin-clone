import "./header.styles.scss";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./header-option/header-option.component";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user-slice";
import { auth } from "../../firebase/firebase";

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header-left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>
				<div className="search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header-right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messages" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				{user ? <HeaderOption onClick={logoutOfApp} avatar title="Me" /> : null}
			</div>
		</div>
	);
}

export default Header;
