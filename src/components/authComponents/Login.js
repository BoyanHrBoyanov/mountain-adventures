import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/authService";

export const Login = () => {

	const navigate = useNavigate();

	const [loginValues, setLoginValues] = useState({
		email: '',
		password: ''
	});

	const onValueChange = (e) => {
		setLoginValues(state => ({ ...state, [e.target.name]: e.target.value }));
	};

	const loginSubmit = async (e) => {
		e.preventDefault();
		await login(loginValues);
		navigate("/");
	};



	return (
		<div className="banner">
			<div className="container">

				<div className="register-area">
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
		</div>
	);
}
