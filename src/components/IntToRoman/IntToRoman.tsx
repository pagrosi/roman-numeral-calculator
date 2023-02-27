import { useState } from 'react';
import { intRomanPairs } from '@/constants/intRomanPairs';
import { Input } from './Input';

export const convertIntToRoman = (int: number): string => {
	let result = '';
	let i = 0;

	while (int > 0) {
		if (int >= intRomanPairs[i].int) {
			result += intRomanPairs[i].roman;
			int -= intRomanPairs[i].int;
		} else {
			i += 1;
		}
	}

	return result;
};

export const IntToRoman = (): JSX.Element => {
	const [intInputNumber, setIntInputNumber] = useState(1);
	return (
		<>
			<Input value={intInputNumber} onChange={setIntInputNumber} />
			<div>
				Roman numerals output is:{' '}
				{convertIntToRoman(intInputNumber)}
			</div>
		</>
	);
};
