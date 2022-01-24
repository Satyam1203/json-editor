import React, { useState } from 'react';
import Input from './Input';

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
						{keys.map(key => <th>{key}</th>)}
					</tr>
				</thead>
				{
					data.map((user) => {
						return (
							<tbody className="object-container">
								<tr className="data-row" key={user._id}>
									{keys.map(key => <td>{user[key] || (user[key] ? 'active' : 'Inactive')}</td>)}
								</tr>
								<tr className="data-row" key={user.id}>
									<td>
										<Input type="text" value={user._id} disabled />
									</td>
									<td>
										<Input type="text" value={user.name} />
									</td>
									<td>
										<Input type="email" value={user.email} />
									</td>
									<td>
										<Input type="number" value={user.age} />
									</td>
									<td>
										<input type="radio" value="active" name={user._id} defaultChecked={user.isActive} />
										Active
										<input type="radio" value="inactive" name={user._id} defaultChecked={!user.isActive} />
										Inactive
									</td>
									<td>
										<Input type="text" value={user.picture} />
									</td>
									<td>
										<textarea value={user.address} />
									</td>
									<td>
										<textarea value={user.about} />
									</td>
									<td>
										<Input type="datetime-local" value={user.registered} />
									</td>
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
