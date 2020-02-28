import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useHeaderStyles = createUseStyles((theme: any) => ({
	header: {
		color: 'white',
		backgroundColor: `${theme.primaryColor}`,
	},
}));

const Header: FC = () => {
	const classes = useHeaderStyles();

	return <header className={classes.header}>Header</header>;
};

export default Header;
