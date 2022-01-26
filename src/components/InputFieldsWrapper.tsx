import React from 'react';
import InputField from './InputField';

interface InputFieldWrapperProps {
    keys: string[],
    user: any,
    idx: number,
    setData: (args: any) => void
}

const InputFieldsWrapper = React.memo(
	({
		user, keys, idx, setData,
	}: InputFieldWrapperProps) => {
		const [fieldMap, setFieldMap] = React.useState<{ [key: string]: string }>({});

		const pickInputField = (field: string, value: string) => {
			let inputType = 'text';
			const fieldType = typeof value;
			const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

			if (fieldType === 'number') inputType = 'number';
			else if (fieldType === 'boolean') inputType = 'radio';
			else if (fieldType === 'string' && value.match(regexEmail)) inputType = 'email';
			else if (fieldType === 'string' && value.length >= 30) inputType = 'textarea';
			else if (fieldType === 'string' && Date.parse(value)) inputType = 'datetime-local';

			setFieldMap(f => ({ ...f, [field]: inputType }));
			return inputType;
		};

		const onChangeMemo = React.useCallback((idx: number, field: string, val: number | string | boolean) => {
			setData((data: any) => [...data.slice(0, idx), { ...data[idx], [field]: val }, ...data.slice(idx + 1)]);
		}, [setData]);

		return (
			<tr className="data-row">
				{keys.map(key => (
					<InputField
						key={key}
						idx={idx}
						field={key}
						fieldType={fieldMap[key] ?? pickInputField(key, user[key])}
						value={user[key]}
						onChange={onChangeMemo}
						disabled={key === '_id'}
					/>
				))}
			</tr>
		);
	}
);

export default InputFieldsWrapper;
