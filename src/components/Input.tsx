import React from 'react';

interface InputProps {
    type: string,
    value: string,
    disabled?: boolean,
    radioOptions?: string[],
    defaultChecked?: boolean,
    name?: string
}

function Input({
	type, value, disabled, radioOptions, ...props
}: InputProps) {
	return (
		<div>
			<input type={type} defaultValue={value} disabled={disabled} {...props} />
		</div>
	);
}

Input.defaultProps = {
	disabled: false,
	radioOptions: [],
	defaultChecked: false,
	name: '',
};

export default Input;
