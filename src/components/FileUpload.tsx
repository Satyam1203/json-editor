import React, { ChangeEvent } from 'react';

interface FileProps {
	setData: (args: any) => void,
	err: string,
	setErr: (args: string) => void
}

function FileUpload({
	setData, err, setErr,
}: FileProps) {
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const fr = new FileReader();
		fr.onload = () => {
			const splits = e?.target?.files?.[0].name.split('.');
			const ext = splits?.[splits.length - 1];

			if (ext === 'json') {
				const data = fr.result as string;
				setData(JSON.parse(data));
				console.log('json loaded');
				setErr('');
			} else {
				setErr('Invalid file type');
			}
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
			<p>{err}</p>
		</div>
	);
}

export default FileUpload;
