// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
// 	const [data, setData] = useState(null);
// 	const [toggle, setToggle] = useState(false);
// 	const [value, setValue] = useState('');

// 	const onClick = () => setToggle((prev) => !prev);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setData({});
// 		}, 1000);
// 	}, []);

// 	return (
// 		<div className="App">
// 			{toggle === true && <div data-testid="hhh"> toggle is true</div>}
// 			<h1 data-testid="datah1">{value}</h1>
// 			<h1>Hello World!</h1>
// 			{data && <div style={{ color: 'red' }}>data</div>}
// 			<button data-testid="toggle-btn" onClick={onClick}>
// 				Click me!
// 			</button>
// 			<input
// 				value={value}
// 				onChange={(e) => {
// 					setValue(e.target.value);
// 				}}
// 				type={'text'}
// 				placeholder="type some text here..."
// 			/>
// 		</div>
// 	);
// }

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Users from './users/Users';

function App() {
	return (
		<div>
			<div data-testid="test">ddddd</div>
			<Link data-testid="link-main" to={'/'}>
				main
			</Link>
			<Link data-testid="link-about" to={'/about'}>
				about
			</Link>
			<Link data-testid="link-users" to={'/users'}>
				users
			</Link>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/:userid" element={<UserDetailsPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
