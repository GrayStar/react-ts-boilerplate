import React, { FC, useState, useEffect } from 'react';

enum DISPLAY_STATES {
	LOADING = 'LOADING',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

interface AsyncPageProps {
	fetchData(): void;
}

const AsyncPage: FC<AsyncPageProps> = ({ children, fetchData }) => {
	const [displayState, setDisplayState] = useState(DISPLAY_STATES.LOADING);

	useEffect(() => {
		async function fetchPageData() {
			setDisplayState(DISPLAY_STATES.LOADING);

			try {
				await fetchData();
				setDisplayState(DISPLAY_STATES.SUCCESS);
			} catch (error) {
				setDisplayState(DISPLAY_STATES.ERROR);
			}
		}

		fetchPageData();
	}, [fetchData]);

	function getDisplayState() {
		switch (displayState) {
			case DISPLAY_STATES.LOADING:
				return <p>Loading...</p>;
			case DISPLAY_STATES.SUCCESS:
				return children;
			case DISPLAY_STATES.ERROR:
				return <p>Error</p>;
			default:
				return <></>;
		}
	}

	return <>{getDisplayState()}</>;
};

export default AsyncPage;
