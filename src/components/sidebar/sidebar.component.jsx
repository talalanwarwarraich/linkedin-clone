import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user-slice";
import "./sidebar.styles.scss";

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="recent-item">
			<span className="hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			{/* top section for personal details */}
			<div className="top">
				<img
					src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3f088MHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=100&q=80"
					alt=""
				/>
				<Avatar src={user.photoUrl} className="avatar">
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			{/* stats section below */}
			<div className="stats">
				<div className="stat">
					<p>Who viewed you</p>
					<p className="number">2,543</p>
				</div>
				<div className="stat">
					<p>Views on post</p>
					<p className="number">2,600</p>
				</div>
			</div>
			{/* sidebar bottom */}
			<div className="bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("javascript")}
				{recentItem("angular")}
			</div>
		</div>
	);
}

export default Sidebar;
