import { useEffect, useState } from "react";

// Custom hook to fetch data from a given URL
const useFetch = (url) => {
	const [data, setData] = useState(null);

	// Effect hook that runs when the URL changes
	useEffect(() => {
		// Async function to fetch data
		const fetchData = async () => {
			const response = await fetch(url);
			const result = await response.json();

			// If data is present and non-empty, update the state
			if (result && result.length > 0) {
				setData(result);
			}
		};

		fetchData();
	}, [url]);

	// Return the fetched data as an array (similar to useState convention)
	return [data];
};

export default useFetch;
