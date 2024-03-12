import { Link } from 'react-router-dom';

const Navegación = () => {
  return (
    <nav
      style={{
        width: '100%',
        fontSize: '25px',
        color: '#999',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <Link to={'/'}>Inicio</Link>
        </div>
        <div style={{ display: 'flex', columnGap: '50px', marginTop: '20px' }}>
          <Link to={'/usuarios'}>Usuarios</Link>
          <Link to={'/paises'}>Paises</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navegación;
