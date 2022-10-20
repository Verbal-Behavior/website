import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import Main from './Pages/Main';
import Card from './Pages/Card';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/Card' element={<Card />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;