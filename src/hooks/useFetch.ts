import React, { useEffect, useState } from 'react';

/**
 * A generic function for fetching data from an api
 * @param url The url at which to fetch the data at
 * @returns the fetched data as well as an error message or null if there isn't one
 */
export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  // const [status, setStatus] = useState<StatusTypes>('loading');

  useEffect(() => {
    // setStatus('loading');

    (async () => {
      try {
        const res = await fetch(url);
        const fetchedData: T = await res.json();
        setData(fetchedData);
        // setStatus('ready');
      } catch (e) {
        setError(e as Error);
        // setStatus('error');
      }
    })();
  }, [url]);

  // return { data, status, error };
  return { data, error };
}
