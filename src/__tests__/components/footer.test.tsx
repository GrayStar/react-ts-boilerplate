import React from 'react';
import { render } from '@testing-library/react';

import Footer from '@/components/footer';

test('renders "Index Page" header', () => {
	const { getByText } = render(<Footer />);
	const footerElement = getByText(/Footer/i);
	expect(footerElement).toBeInTheDocument();
});
