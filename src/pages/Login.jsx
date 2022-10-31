import React from 'react';

function Login() {
	return (
		<div className="flex-center login-container">
			<div className="login">
				<h1 className="login-title">Log In</h1>
				<hr className="login-hr" />
				<div>
					<h3 className="login-input-title">Email</h3>
					<input className="login-input" type="text" />
				</div>
				<div>
					<h3 className="login-input-title">Password</h3>
					<input
						className="login-input"
						type="password"
						id="password-el"
					/>
				</div>
				<div className="stayLogged-box flex-center">
					<input
						type="checkbox"
						name="stayLogged"
						className="stayLogged-el"
					/>
					<span className="stayLogged">Stay Logged In</span>
				</div>
				<button className="login-submit" type="submit">
					Sign In
				</button>
			</div>
		</div>
	);
}

export default Login;
