export const Login = () => {
	return (
		<div class="banner">
			<div class="login-area">
				<h3>Login</h3>
				<form role="form" id="login-form">
					<div class="form-group">
						<input type="text" class="form-control" name="email" placeholder="Email" />
					</div>
					<div class="form-group">
						<input type="password" class="form-control" name="password" placeholder="Password" />
					</div>
					<button type="submit" class="btn btn-default">Login</button>
				</form>
			</div>
		</div>
	);
}
