import React from 'react';
import InputField from './InputField';

/* eslint no-underscore-dangle: 0 */

interface EditorProps {
    data: any[],
    setData: (args: any) => void
}

interface InputFieldWrapperProps {
    keys: string[],
    user: any,
    idx: any,
    setData: any
}

const TableHeader = React.memo(
	({ keys }: {keys: string[]}) => {
		return (
			<tr className="data-row">
				{keys.map(key => (
					<th key={key}>
						{console.log('header render')}
						{key}
					</th>
				))}
			</tr>
		);
	}, (prev, next) => (JSON.stringify(prev.keys) === JSON.stringify(next.keys))
);

const StaticObjectField = React.memo(
	({ data }: {data: string}) => {
		return (
			<td>
				{console.log('static object rerender')}
				{data}
			</td>
		);
	}
);

const StaticObjectData = React.memo(
	({ user, keys }: {user: any, keys: string[]}) => {
		return (
			<tr className="data-row">
				{keys.map(field => <StaticObjectField key={field} data={user[field].toString()} />)}
			</tr>
		);
	}
);

const InputFieldsWrapper = React.memo(
	({
		user, keys, idx, setData,
	}: InputFieldWrapperProps) => {
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
						fieldType={typeof user[key]}
						value={user[key]}
						onChange={onChangeMemo}
						disabled={key === '_id'}
					/>
				))}
			</tr>
		);
	}
);

const UserObjectWrapper = React.memo(
	({
		user, keys, setData, idx,
	}: {user: any, keys: string[], setData: any, idx: number}) => {
		return (
			<tbody className="object-container">
				{console.log('user map')}
				<StaticObjectData user={user} keys={keys} />
				<InputFieldsWrapper setData={setData} user={user} keys={keys} idx={idx} />
			</tbody>
		);
	},
	(prev, next) => ((JSON.stringify(prev.keys) === JSON.stringify(next.keys)) && (JSON.stringify(prev.user) === JSON.stringify(next.user)))
);

function JSONEditor({ data, setData }: EditorProps) {
	const keys = React.useMemo(() => Object.keys(data[0]), [data]);
	const setDataMemo = React.useMemo(() => setData, [setData]);

	console.log(keys);
	return (
		<main>
			<table cellPadding={6} cellSpacing={0}>
				<thead>
					<TableHeader keys={keys} />
				</thead>
				{
					data.map((user, idx) => <UserObjectWrapper key={user._id} user={user} keys={keys} setData={setDataMemo} idx={idx} />)
				}
			</table>
		</main>
	);
}

export default JSONEditor;
