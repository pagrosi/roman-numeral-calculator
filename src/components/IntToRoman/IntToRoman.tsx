import { useState } from 'react';
import { Input } from './Input';

export const convertIntToRoman = (int: number): string => {
	let result = '';

	while (int > 0) {
		if (int >= 1000) {
			result += 'M';
			int -= 1000;
		} else if (int >= 900) {
			result += 'CM';
			int -= 900;
		} else if (int >= 500) {
			result += 'D';
			int -= 500;
		} else if (int >= 400) {
			result += 'CD';
			int -= 400;
		} else if (int >= 100) {
			result += 'C';
			int -= 100;
		} else if (int >= 90) {
			result += 'XC';
			int -= 90;
		} else if (int >= 50) {
			result += 'L';
			int -= 50;
		} else if (int >= 40) {
			result += 'XL';
			int -= 40;
		} else if (int >= 10) {
			result += 'X';
			int -= 10;
		} else if (int >= 9) {
			result += 'IX';
			int -= 9;
		} else if (int >= 5) {
			result += 'V';
			int -= 5;
		} else if (int >= 4) {
			result += 'IV';
			int -= 4;
		} else if (int >= 1) {
			result += 'I';
			int -= 1;
		}
	}

	return result;
};

export const IntToRoman = (): JSX.Element => {
	const [intInputNumber, setIntInputNumber] = useState(1);
	return (
		<>
			<Input value={intInputNumber} onChange={setIntInputNumber} />
		</>
	);
};
