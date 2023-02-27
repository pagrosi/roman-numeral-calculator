import { useState } from 'react';
import { Input } from './Input';

const intRomanPairs = [
	{
		int: 1000,
		roman: 'M',
	},
	{
		int: 900,
		roman: 'CM',
	},
	{
		int: 500,
		roman: 'D',
	},
	{
		int: 400,
		roman: 'CD',
	},
	{
		int: 100,
		roman: 'C',
	},
	{
		int: 90,
		roman: 'XC',
	},
	{
		int: 50,
		roman: 'L',
	},
	{
		int: 40,
		roman: 'XL',
	},
	{
		int: 10,
		roman: 'X',
	},
	{
		int: 9,
		roman: 'IX',
	},
	{
		int: 5,
		roman: 'V',
	},
	{
		int: 4,
		roman: 'IV',
	},
	{
		int: 1,
		roman: 'I',
	},
];

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
		</>
	);
};
