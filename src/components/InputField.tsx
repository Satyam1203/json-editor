import React from 'react';
import Input from './Input';

interface InputFieldProps {
    fieldType: string,
    value: any
}

function InputField({ fieldType, value }: InputFieldProps) {
	const pickInputField = (fieldType: string) => {
		let inputType = 'text';

		if (fieldType === 'number') inputType = 'number';
		else if (fieldType === 'boolean') inputType = 'radio';
		else if (fieldType === 'string' && value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) inputType = 'email';
		else if (fieldType === 'string' && value.length >= 30) inputType = 'textarea';
		else if (fieldType === 'string' && Date.parse(value)) inputType = 'datetime-local';

		return inputType;
	};

	const renderInputFields = (type: string) => {
		let inputField = <></>;

		if (['number', 'text', 'email', 'datetime-local'].includes(type)) inputField = <Input type={type} value={value} />;
		else if (type === 'textarea') inputField = <textarea value={value} />;
		else if (type === 'radio') {
			inputField = (
				<>
					<Input type={type} defaultChecked={value === true} value={value.toString()} />
					True
					<Input type={type} defaultChecked={value === false} value={value.toString()} />
					False
				</>
			);
		}

		return inputField;
	};

	return (
		<div>
			{renderInputFields(pickInputField(fieldType))}
		</div>
	);
}

export default InputField;
