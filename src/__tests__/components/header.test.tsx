import React from 'react';
import { render } from '@testing-library/react';

import Header from '@/components/header';

test('renders "Index Page" header', () => {
	const { getByText } = render(<Header />);
	const headerElement = getByText(/Header/i);
	expect(headerElement).toBeInTheDocument();
});
