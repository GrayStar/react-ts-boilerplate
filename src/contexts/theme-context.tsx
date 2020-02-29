import React, { FC, createContext, useState } from 'react';
import { ThemeProvider as JssProvider } from 'react-jss';

import defaultTheme from '@/jss/themes/default';

export type ThemeConfig = {
	_themeName: string;
	primary: string;
};

export type ThemeContextConfig = {
	theme: Partial<ThemeConfig>;
	setThemeToDtp(): void;
	setThemeToOracle(): void;
};

const ThemeContext = createContext({} as ThemeContextConfig);

const ThemeProvider: FC = (props) => {
	const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

	function setThemeToDtp() {
		setTheme({
			_themeName: 'dtp',
			primary: '#00FF00',
		});
	}

	function setThemeToOracle() {
		setTheme({
			_themeName: 'oracle',
			primary: '#FF0000',
		});
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setThemeToDtp,
				setThemeToOracle,
			}}
		>
			<JssProvider theme={theme}>{props.children}</JssProvider>
		</ThemeContext.Provider>
	);
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer };
