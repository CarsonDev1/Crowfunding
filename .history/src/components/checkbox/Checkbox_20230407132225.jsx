import React from "react";

function Checkbox({ checked = true }) {
	return (
		<label
			className={`inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded cursor-pointer ${
				checked ? "bg-primary border-primary" : "border-strock"
			}`}
		>
			<input type="checkbox" className="hidden" onChange={() => {}} />
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
				</svg>
			</span>
		</label>
	);
}

export default Checkbox;