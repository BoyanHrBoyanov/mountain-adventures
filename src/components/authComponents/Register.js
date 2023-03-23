import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
	const { onRegister } = useContext(AuthContext);


	const { values, changeHandler, onSubmit } = useForm({
		username: '',
		email: '',
		password: '',
		repass: ''
	}, onRegister);

	return (
			<div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Register</h3>
						<form onSubmit={onSubmit}>
							<div className="form-group">
								<input type="text" 
									className="form-control" 
									name="username" 
									placeholder="Username" 
									value={values.username}
									onChange={changeHandler} />
							</div>
							<div className="form-group">
								<input type="email" 
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
							<div className="form-group">
								<input type="password" 
									className="form-control" 
									name="repass" 
									placeholder="Re-Password" 
									value={values.repass}
									onChange={changeHandler} />
							</div>
							<button type="submit" className="btn btn-default">Register</button>
						</form>
					</div>
				</div>
			</div>
	);
}