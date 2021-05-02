import React from "react";
import "./App.css";
import Feed from "./components/feed/feed.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="body">
				<Sidebar />
				<Feed />
			</div>
		</div>
	);
}

export default App;
