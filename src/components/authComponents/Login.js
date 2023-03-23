import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { onLogin } = useContext(AuthContext);
	const { values, changeHandler, onSubmit } = useForm({
		email: '',
		password: ''
	}, onLogin);

	return (
		<div className="banner">
			<div className="container">

				<div className="register-area">
					<h3>Login</h3>
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<input type="text"
								className="form-control"
								name="email"
								placeholder="Email"
								value={values.email}
								onChange={changeHandler} />
						</div>
						<div className="form-group">
							<input type="password"
								className="form-control"
								name="password"
								placeholder="Password"
								value={values.password}
								onChange={changeHandler} />
						</div>
						<button type="submit" className="btn btn-default">Login</button>
					</form>
				</div>
			</div>
		</div>
	);
}
