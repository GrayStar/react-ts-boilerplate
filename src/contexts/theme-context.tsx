import React, { FC, createContext, useState } from 'react';
import { ThemeProvider as JssProvider } from 'react-jss';

const ThemeContext = createContext({});

const initialState = {
	_themeName: 'hackett',
	primaryColor: '#000000',
};

const ThemeProvider: FC = (props) => {
	const [theme, setTheme] = useState(initialState);

	function setThemeToDtp() {
		setTheme({
			_themeName: 'dtp',
			primaryColor: '#00FF00',
		});
	}

	function setThemeToOracle() {
		setTheme({
			_themeName: 'oracle',
			primaryColor: '#FF0000',
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
