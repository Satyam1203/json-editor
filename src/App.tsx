import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import JSONEditor from './components/JSONEditor';

function App() {
	const [data, setData] = useState([]);

	return (
		<div className="App">
			<h1>JSONEditor</h1>
			{
				data.length === 0 ?
					<FileUpload setData={setData} /> : <JSONEditor data={data} setData={setData} />
			}
		</div>
	);
}

export default App;
