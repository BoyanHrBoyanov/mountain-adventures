import { useState } from "react";

export const Login = () => {

	const [loginValues, setLoginValues] = useState({
		email: '',
		password: ''
	});

	const onValueChange = (e) => {
		setLoginValues(state => ({...state, [e.target.name]: e.target.value}));
	};

	const loginSubmit = (e) => {
		e.preventDefault();
		console.log(loginValues);
	};

	return (
		<div className="banner">
			<div className="login-area">
				<h3>Login</h3>
				<form onSubmit={loginSubmit}>
					<div className="form-group">
						<input type="text" 
							className="form-control" 
							name="email" 
							placeholder="Email"
							value={loginValues.username}
							onChange={onValueChange} />
					</div>
					<div className="form-group">
						<input type="password" 
							className="form-control" 
							name="password" 
							placeholder="Password" 
							value={loginValues.password}
							onChange={onValueChange} />
					</div>
					<button type="submit" className="btn btn-default">Login</button>
				</form>
			</div>
		</div>
	);
}
