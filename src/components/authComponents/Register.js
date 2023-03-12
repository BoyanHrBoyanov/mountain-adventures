import { useNavigate } from "react-router";

import { useState } from "react";
import { register } from "../../services/authService";

export const Register = () => {
	const navigate = useNavigate();

	const [registerValues, setRegisterValues] = useState({
		username: '',
		email: '',
		password: '',
		repass: ''
	});

	const onValueChange = (e) => {
		setRegisterValues(state => ({...state, [e.target.name]: e.target.value}));
	};

	const registerSubmit = async (e) => {
		e.preventDefault();
		if (registerValues.password !== registerValues.repass) {
			return window.alert('Password missmatch!');
		}
		const obj = {
			email: registerValues.email,
			password: registerValues.password,
			username: registerValues.username
		}
		await register(obj);
		if (sessionStorage.getItem('to')) {
			navigate(sessionStorage.getItem('to'));
			sessionStorage.removeItem('to');
		} else {
			navigate("/");
		}
	}

	return (
			<div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Sign Up</h3>
						<form onSubmit={registerSubmit}>
							<div className="form-group">
								<input type="text" 
									className="form-control" 
									name="username" 
									placeholder="Username" 
									value={registerValues.username}
									onChange={onValueChange} />
							</div>
							<div className="form-group">
								<input type="email" 
									className="form-control" 
									name="email" 
									placeholder="Email" 
									value={registerValues.email}
									onChange={onValueChange} />
							</div>
							<div className="form-group">
								<input type="password" 
									className="form-control" 
									name="password" 
									placeholder="Password" 
									value={registerValues.password}
									onChange={onValueChange} />
							</div>
							<div className="form-group">
								<input type="password" 
									className="form-control" 
									name="repass" 
									placeholder="Re-Password" 
									value={registerValues.repass}
									onChange={onValueChange} />
							</div>
							<button type="submit" className="btn btn-default">SignUp</button>
						</form>
					</div>
				</div>
			</div>
	);
}