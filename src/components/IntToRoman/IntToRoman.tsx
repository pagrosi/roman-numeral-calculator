import { useState } from 'react';
import { Input } from './Input';

export const IntToRoman = (): JSX.Element => {
	const [intInputNumber, setIntInputNumber] = useState(1);
	return (
		<>
			<Input value={intInputNumber} onChange={setIntInputNumber} />
		</>
	);
};
