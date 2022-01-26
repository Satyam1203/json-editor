import React, { ChangeEvent } from 'react';

interface InputProps {
    type: string,
    value: string,
    onChange: (args: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean,
    checked?: boolean,
    name?: string
}

function Input({
	type, value, disabled, ...props
}: InputProps) {
	return (
		<div>
			<input type={type} defaultValue={value} disabled={disabled} {...props} />
		</div>
	);
}

Input.defaultProps = {
	disabled: false,
	checked: false,
	name: '',
};

export default Input;
