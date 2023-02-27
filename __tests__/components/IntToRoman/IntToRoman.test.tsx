import { render, fireEvent } from '@testing-library/react';
import { IntToRoman } from '@/components/IntToRoman';
import { convertIntToRoman } from '@/components/IntToRoman/IntToRoman';

describe('IntToRoman component', () => {
	test('renders an input element', () => {
		const { getByLabelText } = render(<IntToRoman />);
		const inputElement = getByLabelText('Integer input:');

		expect(inputElement).toBeInTheDocument();
	});

	test('renders correctly', () => {
		const { container } = render(<IntToRoman />);
		expect(container).toMatchSnapshot();
	});

	test('updates the ouput to roman numeral when input changes', () => {
		const { getByLabelText, getByText } = render(<IntToRoman />);
		const inputElement = getByLabelText('Integer input:');
		const expectedOutputText = 'Roman numerals output is: L';

		fireEvent.change(inputElement, { target: { value: 50 } });

		expect(getByText(expectedOutputText)).toBeInTheDocument;
	});
});

describe('convertIntToRoman function', () => {
	test('returns empty string for zero', () => {
		expect(convertIntToRoman(0)).toBe('');
	});

	test('returns expected values for integers converted', () => {
		expect(convertIntToRoman(1)).toBe('I');
		expect(convertIntToRoman(50)).toBe('L');
		expect(convertIntToRoman(495)).toBe('CDXCV');
		expect(convertIntToRoman(1000)).toBe('M');
	});
});
