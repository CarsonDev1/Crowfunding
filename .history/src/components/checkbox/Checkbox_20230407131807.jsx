import React from "react";

function Checkbox({ checked = true }) {
	return (
		<label
			className={`inline-block w-5 h-5 border rounded cursor-pointer border-strock ${
				checked ? "bg-primary border-primary" : "border-strock"
			}`}
		>
			<input type="checkbox" className="hidden" />
		</label>
	);
}

export default Checkbox;
