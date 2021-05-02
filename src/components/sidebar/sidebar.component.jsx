import { Avatar } from "@material-ui/core";
import "./sidebar.styles.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			{/* top section for personal details */}
			<div className="top">
				<img src="../../assets/images/sidebar_top_bg.jpg" alt="" />
				<Avatar className="avatar" />
				<h2>Talal Anwar</h2>
				<h4>talal.anwar.warraich@gmail.com</h4>
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
			{/* sidebar button */}
			<div className="button">
				<p>Recent</p>
			</div>
		</div>
	);
}

export default Sidebar;
