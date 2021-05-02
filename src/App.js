import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/feed/feed.component";
import Header from "./components/header/header.component";
import Login from "./components/login/login.component";
import Sidebar from "./components/sidebar/sidebar.component";
import { selectUser } from "./features/user-slice";

function App() {
	const user = useSelector(selectUser);

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="body">
					<Sidebar />
					<Feed />
				</div>
			)}
		</div>
	);
}

export default App;
