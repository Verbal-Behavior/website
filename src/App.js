import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;