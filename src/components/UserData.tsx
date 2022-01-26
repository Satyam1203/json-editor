import React from 'react';

const TableHeader = React.memo(
	({ keys }: {keys: string[]}) => {
		return (
			<tr className="data-row">
				{keys.map(key => (
					<th key={key}>
						{key}
					</th>
				))}
			</tr>
		);
	}, (prev, next) => (JSON.stringify(prev.keys) === JSON.stringify(next.keys))
);

const StaticUserField = React.memo(
	({ data }: {data: string}) => {
		return (
			<td>
				{data}
			</td>
		);
	}
);

const StaticUserData = React.memo(
	({ user, keys }: {user: {[key: string]: number | string | boolean}, keys: string[]}) => {
		return (
			<tr className="data-row">
				{keys.map(field => <StaticUserField key={field} data={user[field].toString()} />)}
			</tr>
		);
	}
);

export { TableHeader, StaticUserData };
