import React from 'react';
import { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import JSONEditor from './components/JSONEditor';

function App() {
	const [data, setData] = useState([]);

	return (
		<div className="App">
			{
				data.length === 0 ?
					<FileUpload setData={setData} /> : <JSONEditor data={data} />
			}
		</div>
	);
}

export default App;
