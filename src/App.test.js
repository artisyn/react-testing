import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

//describe('test app', () => {
// test('renders learn react link', () => {
// 	render(<App />);
// 	const helloWorld = screen.getByText(/hello world/i);
// 	expect(helloWorld).toBeInTheDocument();
// 	const button = screen.getByRole('button');
// 	expect(button).toBeInTheDocument();
// 	const input = screen.getByPlaceholderText(/type some text here.../i);
// 	expect(input).toMatchSnapshot();
// 	screen.debug();
// });
// test('val', () => {
// 	render(<App />);
// 	const helloWorld2 = screen.queryByText(/hello2/i);
// 	expect(helloWorld2).toBeNull();
// });
// test('async', async () => {
// 	render(<App />);
// 	screen.debug();
// 	const asyncData = await screen.findByText(/data/i);
// 	expect(asyncData).toBeInTheDocument();
// 	expect(asyncData).toHaveStyle({ color: 'red' });
// 	screen.debug();
// });
// test('click event', () => {
// 	render(<App />);
// 	screen.debug();
// 	const btn = screen.getByTestId('toggle-btn');
// 	expect(screen.queryByTestId('hhh')).toBeNull();
// 	fireEvent.click(btn);
// 	screen.debug();
// 	expect(screen.queryByTestId('hhh')).toBeInTheDocument();
// });
// 	test('input event', () => {
// 		render(<App />);

// 		const input = screen.getByPlaceholderText(/type some text here.../i);
// 		const btn = screen.getByTestId('toggle-btn');
// 		expect(screen.queryByTestId('datah1')).toContainHTML('');
// 		// fireEvent.input(input, {
// 		// 	target: { value: '123123' },
// 		// });
// 		userEvent.type(input, '123123');

// 		expect(screen.queryByTestId('datah1')).toContainHTML('123123');
// 	});
// });
//
test('true value', () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(screen.getByTestId('test')).toBeInTheDocument();
});
