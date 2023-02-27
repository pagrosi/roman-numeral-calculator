interface IProps {
	value: number;
	onChange: (value: number) => void;
}

export const validateInput = (inputNumber: number): boolean =>
	inputNumber >= 1 && inputNumber <= 1000;

export const Input = (props: IProps): JSX.Element => (
	<label>
		Integer Input:{' '}
		<input
			value={props.value}
			onChange={(e) => {
				if (validateInput(e.target.valueAsNumber))
					props.onChange(e.target.valueAsNumber);
			}}
			type="number"
			min={1}
			max={1000}
		/>
	</label>
);
