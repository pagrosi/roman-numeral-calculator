interface IProps {
	value: number;
	onChange: (value: number) => void;
}

export const Input = (props: IProps): JSX.Element => (
	<label>
		Integer Input:{' '}
		<input
			value={props.value}
			onChange={(e) => {
				props.onChange(e.target.valueAsNumber);
			}}
			type="number"
			min={1}
			max={1000}
		/>
	</label>
);
