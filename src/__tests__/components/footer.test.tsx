import React from 'react';
import { render } from '@testing-library/react';

import Footer from '@/components/footer';

test('renders the footer', () => {
	const { getByText } = render(<Footer />);
	const footerElement = getByText(/Footer/i);
	expect(footerElement).toBeInTheDocument();
});
