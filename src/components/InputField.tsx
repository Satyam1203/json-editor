import React, { ReactElement } from 'react';
import Input from './Input';

interface InputFieldProps {
    idx: number,
    field: string,
    fieldType: string,
    value: any,
    disabled: boolean,
    onChange: (idx: number, field: string, value: string | number | boolean) => void
}

function InputField({
	idx, field, fieldType, value, disabled, onChange,
}: InputFieldProps) {
	const renderInputFields = (type: string) => {
		let inputField: ReactElement = <input />;

		if (['text', 'email', 'datetime-local'].includes(type)) inputField = <Input type={type} value={value} onChange={e => onChange(idx, field, e.target.value)} disabled={disabled} />;
		else if (type === 'number') inputField = <Input type={type} value={value} onChange={e => onChange(idx, field, e.target.valueAsNumber)} disabled={disabled} />;
		else if (type === 'textarea') inputField = <textarea rows={4} cols={30} value={value} onChange={e => onChange(idx, field, e.target.value)} />;
		else if (type === 'radio') {
			inputField = (
				<>
					<Input type={type} name={field + idx.toString()} checked={value === true} value={value.toString()} onChange={() => onChange(idx, field, true)} />
					True
					<Input type={type} name={field + idx.toString()} checked={value === false} value={value.toString()} onChange={() => onChange(idx, field, false)} />
					False
				</>
			);
		}

		return inputField;
	};

	return (
		<td>
			{renderInputFields(fieldType)}
		</td>
	);
}

export default React.memo(InputField);
