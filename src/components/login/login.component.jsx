import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user-slice";
import { auth } from "../../firebase/firebase";
import "./login.styles.scss";

function Login() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const dispatch = useDispatch();

	const loginApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profilePic: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => {
				alert(error);
			});
	};
	const register = () => {
		if (!name) {
			return alert("Please enter a full name.");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							})
						);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<div className="login">
			<img
				src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
				alt=""
			/>

			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Full name required if registering."
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder="Profile pic URL (optional)"
					type="text"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={(e) => loginApp(e)}>
					Sign In
				</button>

				<p>
					Not a member?
					<span className="register" onClick={register}>
						Register Now
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
