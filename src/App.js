import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Main from './Pages/Main';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Login' element={<Main />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;