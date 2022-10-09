import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;