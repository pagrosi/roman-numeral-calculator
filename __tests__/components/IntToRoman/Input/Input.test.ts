import { validateInput } from '@/components/IntToRoman/Input/Input';

describe('validateInput function', () => {
	test('should return true if input is a number between 1 and 1000', () => {
		expect(validateInput(1)).toBe(true);
		expect(validateInput(500)).toBe(true);
		expect(validateInput(1000)).toBe(true);
	});

	test('should return false for input values that are less than 0, greater than 1000, or not integers', () => {
		expect(validateInput(0)).toBe(false);
		expect(validateInput(1001)).toBe(false);
		expect(validateInput(500.5)).toBe(false);
		expect(validateInput(NaN)).toBe(false);
	});
});
