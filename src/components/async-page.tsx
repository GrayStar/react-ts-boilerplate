import React, { FC, useState, useEffect } from 'react';

import ErrorDisplay from '@/components/error-display';

enum DISPLAY_STATES {
	LOADING = 'LOADING',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

interface AsyncPageProps {
	fetchData(): void;
}

const AsyncPage: FC<AsyncPageProps> = ({ children, fetchData }) => {
	const [fetchPageDataError, setFetchPageDataError] = useState(undefined);
	const [displayState, setDisplayState] = useState(DISPLAY_STATES.LOADING);

	useEffect(() => {
		async function fetchPageData() {
			setDisplayState(DISPLAY_STATES.LOADING);

			try {
				await fetchData();
				setDisplayState(DISPLAY_STATES.SUCCESS);
			} catch (error) {
				setFetchPageDataError(error);
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
				return <ErrorDisplay error={fetchPageDataError} />;
			default:
				return <></>;
		}
	}

	return <>{getDisplayState()}</>;
};

export default AsyncPage;
