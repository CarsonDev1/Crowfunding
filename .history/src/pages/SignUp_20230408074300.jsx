import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
	name: yup.string().required("This field is required"),
});

function SignUp() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const handleSignUp = (values) => {
		console.log(values);
	};
	const [acceptTerm, setAcceptTerm] = useState(false);
	const handleToggleTerm = () => {
		setAcceptTerm(!acceptTerm);
	};
	return (
		<LayoutAuthentication heading="Sign Up">
			<p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
				Already have an account?{" "}
				<Link to="/sign-in" className="font-medium underline text-primary">
					Sign in
				</Link>
			</p>
			<button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border rounded-lg gap-x-3 border-strock text-text2">
				<img srcSet="/icon/Google.png 2x" alt="icon-google" />
				<span>Sign up with google</span>
			</button>
			<p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">Or sign up with email</p>
			<form onSubmit={handleSubmit(handleSignUp)}>
				<FormGroup>
					<Label htmlFor="name">Full Name *</Label>
					<Input placeholder="Carson" control={control} name="name" />
				</FormGroup>
				<FormGroup>
					<Label htmlFor="email">Email *</Label>
					<Input placeholder="example@gmail.com" type="email" control={control} name="email" />
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">Password *</Label>
					<Input placeholder="Create a password" type="password" control={control} name="password" />
				</FormGroup>
				<div className="flex items-start mb-5 gap-x-5">
					<Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
						<p className="flex-1 text-sm text-text2">
							I agree to the <span className="underline text-secondary">Terms of Use</span> and have read
							and understand the <span className="underline text-secondary">Privacy policy</span>.
						</p>
					</Checkbox>
				</div>
				<Button className="w-full bg-primary" type="submit">
					Create my account
				</Button>
			</form>
		</LayoutAuthentication>
	);
}

export default SignUp;
