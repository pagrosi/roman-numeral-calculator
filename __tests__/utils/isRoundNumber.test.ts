import { isRoundNumber } from '@/utils/isRoundNumber';

describe('isRoundNumber function', () => {
	test('should return true if number is round', () => {
		expect(isRoundNumber(1)).toBe(true);
		expect(isRoundNumber(3)).toBe(true);
		expect(isRoundNumber(1000)).toBe(true);
	});

	test('should return false if number is not round, or not integer', () => {
		expect(isRoundNumber(1.3)).toBe(false);
		expect(isRoundNumber(500.5)).toBe(false);
		expect(isRoundNumber(NaN)).toBe(false);
	});
});
