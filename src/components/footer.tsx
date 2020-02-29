import React, { FC, useRef, useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeConfig } from '@/contexts/theme-context';

const useFooterStyles = createUseStyles((theme: ThemeConfig) => ({
	footer: {
		left: 0,
		bottom: 0,
		width: '100%',
		color: 'white',
		padding: '32px 50px',
		position: 'absolute',
		backgroundColor: `${theme.primary}`,
	},
}));

const Footer: FC = () => {
	const classes = useFooterStyles();
	const footer = useRef<HTMLElement | null>(null);

	const handleWindowResize = useCallback(() => {
		setBodyPadding();
	}, []);

	useEffect(() => {
		setBodyPadding();
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize]);

	function setBodyPadding() {
		if (!footer.current) return;

		const footerHeight = footer.current.clientHeight;
		document.body.style.paddingBottom = `${footerHeight}px`;
	}

	return (
		<footer ref={footer} className={classes.footer}>
			Footer
		</footer>
	);
};

export default Footer;
