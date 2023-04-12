import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

function Input(props) {
	const { control, name, type, ...rest } = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				type={type}
				className="w-full px-6 py-4 font-medium border rounded-xl border-strock text-text1 placeholder:text-text4"
				{...field}
			/>
		</div>
	);
}
Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	control: PropTypes.any.isRequired,
};
export default Input;
