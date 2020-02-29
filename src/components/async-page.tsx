import React, { FC, useState, useEffect, useCallback } from 'react';

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

	const fetchPageData = useCallback(async () => {
		setDisplayState(DISPLAY_STATES.LOADING);
		setFetchPageDataError(undefined);

		try {
			await fetchData();
			setDisplayState(DISPLAY_STATES.SUCCESS);
		} catch (error) {
			setFetchPageDataError(error);
			setDisplayState(DISPLAY_STATES.ERROR);
		}
	}, [fetchData]);

	useEffect(() => {
		fetchPageData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getDisplayState() {
		switch (displayState) {
			case DISPLAY_STATES.LOADING:
				return <p>Loading...</p>;
			case DISPLAY_STATES.SUCCESS:
				return children;
			case DISPLAY_STATES.ERROR:
				return (
					<ErrorDisplay
						error={fetchPageDataError}
						showBackButton={true}
						showRetryButton={true}
						onRetryButtonClick={fetchPageData}
					/>
				);
			default:
				return <></>;
		}
	}

	return <>{getDisplayState()}</>;
};

export default AsyncPage;
