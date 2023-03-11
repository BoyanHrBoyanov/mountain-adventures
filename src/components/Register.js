

export const Register = () => {
	return (
			<div class="banner">
				<div class="container">
					<div class="register-area">
						<h3>Sign Up</h3>
						<form role="form" id="register-form">
							<div class="form-group">
								<input type="text" class="form-control" name="username" placeholder="Username" />
							</div>
							<div class="form-group">
								<input type="email" class="form-control" name="email" placeholder="Enter email" />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" name="password" placeholder="Password" />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" name="repass" placeholder="Re-Password" />
							</div>
							<button type="submit" class="btn btn-default">SignUp</button>
						</form>
					</div>
				</div>
			</div>
	);
}