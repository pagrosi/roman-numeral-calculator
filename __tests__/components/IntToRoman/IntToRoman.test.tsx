import { render } from '@testing-library/react';
import { IntToRoman } from '@/components/IntToRoman';

describe('IntToRoman component', () => {
	test('renders an input element', () => {
		const { getByLabelText } = render(<IntToRoman />);
		const inputElement = getByLabelText('Integer Input:');

		expect(inputElement).toBeInTheDocument();
	});
});
