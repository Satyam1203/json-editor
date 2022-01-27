import React from 'react';
import { TableHeader, StaticUserData } from './UserData';
import InputFieldsWrapper from './InputFieldsWrapper';
import { UserProps } from '../App';

/* eslint no-underscore-dangle: 0 */

interface EditorProps {
	data: UserProps[],
    setData: (args: UserProps[] | ((args: UserProps[]) => UserProps[])) => void
}

const UserObjectWrapper = React.memo(
	({
		user, keys, setData, idx,
	}: {user: UserProps, keys: string[], setData: (args: UserProps[] | ((args: UserProps[]) => UserProps[])) => void, idx: number}) => {
		return (
			<tbody className="object-container">
				<StaticUserData user={user} keys={keys} />
				<InputFieldsWrapper setData={setData} user={user} keys={keys} idx={idx} />
			</tbody>
		);
	},
	(prev, next) => ((JSON.stringify(prev.keys) === JSON.stringify(next.keys)) && (JSON.stringify(prev.user) === JSON.stringify(next.user)))
);

function JSONEditor({ data, setData }: EditorProps) {
	const keys = React.useMemo(() => Object.keys(data[0]), [data]);
	const setDataMemo = React.useMemo(() => setData, [setData]);

	return (
		<main>
			<table cellPadding={6} cellSpacing={0}>
				<thead>
					<TableHeader keys={keys} />
				</thead>
				{
					data.map((user, idx) => <UserObjectWrapper key={user._id.toString()} user={user} keys={keys} setData={setDataMemo} idx={idx} />)
				}
			</table>
		</main>
	);
}

export default JSONEditor;
