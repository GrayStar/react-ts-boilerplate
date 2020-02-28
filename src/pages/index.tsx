import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { ThemeContext } from '../contexts/theme-context';

const useIndexStyles = createUseStyles((theme: any) => {
	return {
		customH1: {
			fontSize: 48,
			lineHeight: '56px',
			color: `${theme.primaryColor}`,
		},
	};
});

const Index: FC = () => {
	const themeContext: any = useContext(ThemeContext);
	const classes = useIndexStyles();

	function handleDtpThemeButtonClick() {
		themeContext.setThemeToDtp();
	}

	function handleOracleThemeButtonClick() {
		themeContext.setThemeToOracle();
	}

	return (
		<div>
			<h1 className={classes.customH1}>Index Page</h1>
			<Link to="/about">About</Link>
			<button onClick={handleDtpThemeButtonClick}>DTP Theme</button>
			<button onClick={handleOracleThemeButtonClick}>Oracle Theme</button>
		</div>
	);
};

export default Index;
