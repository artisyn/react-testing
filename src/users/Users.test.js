import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Users from '../users/Users';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetailsPage from '../pages/UserDetailsPage';
jest.mock('axios');

describe('Users Test', () => {
	let response;
	beforeEach(() => {
		response = {
			data: [
				{
					id: 1,
					name: 'Leanne Graham',
				},
				{
					id: 2,
					name: 'Ervin Howell',
				},
			],
		};
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	// test('async', async () => {
	// 	axios.get.mockReturnValue(response);
	// 	render(<Users />);
	// 	const users = await screen.findAllByTestId('user-item');
	// 	expect(users.length).toBe(2);
	// 	expect(axios.get).toBeCalledTimes(1);
	// });
	test('asyncroute', async () => {
		axios.get.mockReturnValue(response);
		render(
			<MemoryRouter initialEntries={['/users']}>
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route
						path="/users/:userid"
						element={<UserDetailsPage />}
					/>
				</Routes>
			</MemoryRouter>
		);

		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(2);

		const btn = screen.getByText('click');
		userEvent.click(btn);
		expect(screen.getByTestId('testbtn')).toBeInTheDocument();
		userEvent.click(users[1]);

		screen.debug();

		expect(screen.getByTestId('userd')).toBeInTheDocument();
	});
});
