import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

// Definimos un tipo genérico para la data que puede ser cualquier tipo
type Data<T> = T | null;

// Definimos una interfaz para las respuestas de Axios

// Definimos una interfaz para el hook
interface FetchResult<T> {
  data: Data<T>;
  isLoading: boolean;
  error: string | null;
}

// Definimos el hook
export const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);
    axios
      .get(url, { signal: controller.signal })
      .then((response: AxiosResponse<Data<T>>) => {
        setData(response.data); // Asignamos la data desde la respuesta
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
