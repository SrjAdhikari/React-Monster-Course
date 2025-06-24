import { useEffect, useState } from "react";

// Custom hook to fetch data from an API
const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Effect hook that runs when the URL changes
	useEffect(() => {
		// Async function to fetch data
		const fetchData = async () => {
			try {
				setLoading(true);

				const response = await fetch(url);

				// Check if response is ok
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const result = await response.json();

				// If data is present and non-empty, update the state
				if (result && result.length > 0) {
					setData(result);
				}

				setError(null);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	// Return the fetched data, loading state and error as an array
	return [data, loading, error];
};

export default useFetch;
