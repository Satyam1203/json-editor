import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import JSONEditor from './components/JSONEditor';

export interface UserProps {
	[key: string]: string | number | boolean
}

function App() {
	const [data, setData] = useState<UserProps[]>([]);
	const [err, setErr] = useState<string>('');

	return (
		<div className="App">
			<h1>JSONEditor</h1>
			{
				data.length === 0 ?
					<FileUpload setData={setData} err={err} setErr={setErr} /> : <JSONEditor data={data} setData={setData} />
			}
		</div>
	);
}

export default App;
