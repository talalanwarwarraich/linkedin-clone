import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/feed/feed.component";
import Header from "./components/header/header.component";
import Login from "./components/login/login.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Widgets from "./components/widgets/widgets.component";
import { login, logout, selectUser } from "./features/user-slice";
import { auth } from "./firebase/firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
