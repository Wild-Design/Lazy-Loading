import { useFetch } from '../../hooks/useFetch';
import { Usuario } from '../../interfaces/Usuarios';

const Usuarios = () => {
  const {
    data: usuarios,
    isLoading,
    error,
  } = useFetch<Usuario[]>('https://jsonplaceholder.typicode.com/users');
  console.log(usuarios);

  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      {isLoading && <p>Cargando usuarios...</p>}
      {error && <p>{`Error: ${error}`}</p>}

      {usuarios?.map((usuario) => (
        <div style={{ border: '1px solid #fff' }} key={usuario.id}>
          <p>{usuario.name}</p>
          <p>{usuario.email}</p>
          <p>{usuario.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Usuarios;
