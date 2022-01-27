import React, { ChangeEvent, useState } from 'react';
import { UserProps } from '../App';

interface FileProps {
	setData: (args: UserProps[] | ((args: UserProps[]) => UserProps[])) => void,
	err: string,
	setErr: (args: string) => void
}

function FileUpload({
	setData, err, setErr,
}: FileProps) {
	const [loading, setLoading] = useState(false);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoading(true);
		const fr = new FileReader();
		fr.onload = () => {
			const splits = e?.target?.files?.[0].name.split('.');
			const ext = splits?.[splits.length - 1];

			if (ext === 'json') {
				const data = fr.result as string;
				setLoading(false);
				setData(JSON.parse(data));
				setErr('');
			} else {
				setLoading(false);
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
			{loading && <p>Loading Data...</p>}
			<p>{err}</p>
		</div>
	);
}

export default FileUpload;
