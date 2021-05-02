import "./login.styles.scss";

function Login() {
	const login = () => {};
	const register = () => {};

	return (
		<div className="login">
			<img
				src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
				alt=""
			/>

			<form>
				<input type="text" placeholder="Full name required if registering." />
				<input placeholder="Profile pic URL (optional)" type="text" />
				<input type="email" placeholder="email" />
				<input type="password" placeholder="Password" />
				<button>Sign In</button>

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
