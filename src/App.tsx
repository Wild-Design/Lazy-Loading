import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegación from './components/Navegación/Navegación';
import Usuarios from './components/Usuarios/Usuarios';

const Paises = lazy(() => import('./components/Paises/Paises'));

function App() {
  return (
    <Suspense fallback={<h3>Cargando...</h3>}>
      <Navegación />
      <Routes>
        <Route
          path='/'
          element={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >
              <h1>Hola Mundo</h1>
            </div>
          }
        />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/paises' element={<Paises />} />
        <Route
          path='/*'
          element={<h3>No se pudo encontrar esta página chabón</h3>}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
