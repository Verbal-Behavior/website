import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Registration from './Pages/Registration';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;