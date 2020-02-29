import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@/contexts/theme-context';
import Navigator from '@/core/navigator';

import globalStyles from '@/jss/global';

const useGlobalStyles = createUseStyles(globalStyles);

const App: FC = () => {
	useGlobalStyles();

	return (
		<ThemeProvider>
			<Router>
				<Navigator />
			</Router>
		</ThemeProvider>
	);
};

export default App;
