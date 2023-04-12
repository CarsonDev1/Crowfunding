import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

function SignUp() {
	return (
		<LayoutAuthentication heading="Sign Up">
			<p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
				Already have an account?{" "}
				<Link to="/sign-in" className="font-medium underline text-primary">
					Sign in
				</Link>
			</p>
			<button className="flex items-center w-full gap-x-2">
				<img srcSet="/icon/Google.png 2x" alt="icon-google" />
			</button>
		</LayoutAuthentication>
	);
}

export default SignUp;
