import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [value, setValue] = useState('');

	const onClick = () => setToggle((prev) => !prev);

	useEffect(() => {
		setTimeout(() => {
			setData({});
		}, 1000);
	}, []);

	return (
		<div className="App">
			{toggle === true && <div data-testid="hhh"> toggle is true</div>}
			<h1 data-testid="datah1">{value}</h1>
			<h1>Hello World!</h1>
			{data && <div style={{ color: 'red' }}>data</div>}
			<button data-testid="toggle-btn" onClick={onClick}>
				Click me!
			</button>
			<input
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				type={'text'}
				placeholder="type some text here..."
			/>
		</div>
	);
}

export default App;
