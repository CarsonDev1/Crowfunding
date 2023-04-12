import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

function Input(props) {
	const { control, name, type = "text", error = "", placeholder = "", ...rest } = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				id={name}
				type={type}
				className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 ${
					error.length > 0 ? "border-error" : "border-strock"
				}`}
				placeholder={error.length < 0 ? placeholder.placeholder : ""}
				{...rest}
				{...field}
			/>
			{error.length > 0 && (
				<span className="absolute text-sm font-medium pointer-events-none -translate-y-2/4 text-error top-2/4 left-6">
					{error}
				</span>
			)}
		</div>
	);
}
Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	error: PropTypes.string,
	control: PropTypes.any.isRequired,
};
export default Input;
