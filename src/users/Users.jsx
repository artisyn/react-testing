import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);

	const loadUsers = async () => {
		const resp = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		setUsers(resp.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);
	return (
		<div>
			{users.map((user) => (
				<Link
					to={`/users/${user.id}`}
					key={user.id}
					data-testid="user-item"
				>
					{user.name}
				</Link>
			))}

			{show && <div data-testid="testbtn">ddd</div>}
			<button
				onClick={() => {
					setShow(!show);
				}}
			>
				click
			</button>
		</div>
	);
};

export default Users;
