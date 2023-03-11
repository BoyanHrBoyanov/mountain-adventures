

export const Register = () => {
	return (
			<div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Sign Up</h3>
						<form role="form" id="register-form">
							<div className="form-group">
								<input type="text" className="form-control" name="username" placeholder="Username" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" name="email" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="password" placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="repass" placeholder="Re-Password" />
							</div>
							<button type="submit" className="btn btn-default">SignUp</button>
						</form>
					</div>
				</div>
			</div>
	);
}