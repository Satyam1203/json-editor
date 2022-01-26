import React from 'react';

interface InputProps {
    type: string,
    value: string,
    onChange: (args: any) => void
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
			{console.log('rerender')}
		</div>
	);
}

Input.defaultProps = {
	disabled: false,
	checked: false,
	name: '',
};

export default Input;
