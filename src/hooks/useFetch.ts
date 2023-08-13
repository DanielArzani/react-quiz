import React, { useEffect, useState } from 'react';

/**
 * A generic function for fetching data from an api
 * @param url The url at which to fetch the data at
 */
export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const res = await fetch(url);
        const fetchedData: T = await res.json();
        setData(fetchedData);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
}
