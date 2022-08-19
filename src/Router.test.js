import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('test app', () => {
	test('Router test', () => {
		render(
			<MemoryRouter initialEntries={['/adfdfd']}>
				<App />
			</MemoryRouter>
		);
		// const mainLink = screen.getByTestId('link-main');
		// const aboutLink = screen.getByTestId('link-about');
		// userEvent.click(aboutLink);
		// expect(screen.getByTestId('about')).toBeInTheDocument();
		// userEvent.click(mainLink);
		// expect(screen.getByTestId('main')).toBeInTheDocument();

		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});
});
