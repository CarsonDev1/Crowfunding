import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

function SignUp() {
	return (
		<LayoutAuthentication heading="Sign Up">
			<p className="text-sm font-medium text-center lg:text-sm">
				Already have an account?{" "}
				<Link to="/sign-in" className="text-primary">
					Sign in
				</Link>
			</p>
		</LayoutAuthentication>
	);
}

export default SignUp;
