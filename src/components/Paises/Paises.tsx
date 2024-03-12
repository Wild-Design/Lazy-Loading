import { useFetch } from '../../hooks/useFetch';
import { Pais } from '../../interfaces/Paises';

const Paises = () => {
  const {
    data: paises,
    isLoading,
    error,
  } = useFetch<Pais[]>('https://restcountries.com/v3.1/all');
  return (
    <div>
      <p>{isLoading && 'Cargando paises...'}</p>
      <p>{error && `Error: ${error}`}</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
          padding: '20px',
        }}
      >
        {paises?.map((pais) => (
          <div
            style={{
              border: '1px solid #fff',
              width: '250px',
              height: '200px',
              padding: '10px',
            }}
            key={pais.cca2}
          >
            <p>{pais.name.common}</p>
            <img
              style={{ width: '100%', height: '150px' }}
              src={pais.flags.png}
              alt={pais.name.common}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paises;
