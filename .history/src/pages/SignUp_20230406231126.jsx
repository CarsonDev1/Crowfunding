import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

function SignUp() {
	return (
		<LayoutAuthentication heading="Sign Up">
			<p>
				Already have an account? <Link to="/sign-in">Sign in</Link>
			</p>
		</LayoutAuthentication>
	);
}

export default SignUp;
