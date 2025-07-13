import { createContext, useContext } from 'react';

export default function Menu() {
	const SelectedContext = createContext();
	const { selected, setSelected } = useContext(SelectedContext);

	const onChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<div className='menu'>
			<label htmlFor=''>
				<input
					type='radio'
					onChange={onChange}
					checked={selected === '1'}
					value='1'
					name='selected'
				/>
				{''}Box 1
			</label>
			<label htmlFor=''>
				<input
					type='radio'
					onChange={onChange}
					checked={selected === '2'}
					value='2'
					name='selected'
				/>
				{''}Box 2
			</label>
			<label htmlFor=''>
				<input
					type='radio'
					onChange={onChange}
					checked={selected === '3'}
					value='3'
					name='selected'
				/>
				{''}Box 3
			</label>
		</div>
	);
}
