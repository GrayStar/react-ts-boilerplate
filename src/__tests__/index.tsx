import React from 'react';
import { render } from '@testing-library/react';

import Index from '@/pages/index';

test('renders "Index Page" header', () => {
	const { getByText } = render(<Index />);
	const headerElement = getByText(/Index Page/i);
	expect(headerElement).toBeInTheDocument();
});
