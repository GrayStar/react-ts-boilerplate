import React, { FC, useContext } from 'react';
import { Button } from 'react-bootstrap';

import { ThemeContext } from '@/contexts/theme-context';

const ThemeSelect: FC = () => {
	const themeContext = useContext(ThemeContext);

	function handleDtpThemeButtonClick() {
		themeContext.setThemeToDtp();
	}

	function handleOracleThemeButtonClick() {
		themeContext.setThemeToOracle();
	}

	return (
		<>
			<Button onClick={handleDtpThemeButtonClick}>DTP Theme</Button>
			<Button onClick={handleOracleThemeButtonClick}>Oracle Theme</Button>
		</>
	);
};

export default ThemeSelect;
