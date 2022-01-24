import React, { useState } from 'react';
import InputField from './InputField';

/* eslint no-underscore-dangle: 0 */

interface EditorProps {
    data: any[]
}

function JSONEditor({ data }: EditorProps) {
	const [keys, setKeys] = useState(Object.keys(data[0]));

	console.log(keys);
	return (
		<main>
			<h1>JSONEditor</h1>
			<table cellPadding={6} cellSpacing={0}>
				<thead>
					<tr className="data-row">
						{keys.map(key => <th key={key}>{key}</th>)}
					</tr>
				</thead>
				{
					data.map((user) => {
						return (
							<tbody className="object-container" key={user._id}>
								<tr className="data-row">
									{keys.map(key => <td key={key}>{user[key] || user[key].toString()}</td>)}
								</tr>
								<tr className="data-row" key={user.id}>
									{keys.map(key => <td key={key}><InputField fieldType={typeof user[key]} value={user[key]} /></td>)}
								</tr>
							</tbody>
						);
					})
				}
			</table>
		</main>
	);
}

export default JSONEditor;
