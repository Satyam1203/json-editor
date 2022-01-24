import React from 'react';

interface FileProps {
    setData: (args: any) => void
}

function FileUpload({ setData }: FileProps) {
	const handleFileChange = (e: any) => {
		console.log(e.target.files);
		const fr = new FileReader();
		fr.onload = function () {
			const data = fr.result as string;
			console.log(data);
			setData(JSON.parse(data));
		};
		if (e.currentTarget.files) {
			fr.readAsText(e.currentTarget.files[0]);
		}
	};

	return (
		<div>
			<input
				type="file"
				onChange={handleFileChange}
			/>
		</div>
	);
}

export default FileUpload;
