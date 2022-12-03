import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import Main from './Pages/Main';
import Folder from './Pages/Folder';
import Cards from './Pages/Cards';
import CreateCard from './Pages/CreateCard';
import DisplayCard from './Pages/DisplayCard';
import Welcome from './Pages/Welcome';
import CreateCardPage from './Pages/CreateCardPage';
import CreateFolderPage from './Pages/CreateFolderPage';
import Image from './Pages/Image';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Main' element={<Main />} />
          {/* <Route path='/Folder' element={<Folder />} /> */}
          <Route path='/Cards' element={<Cards />} />
          <Route path='/CreateCard' element={<CreateCard />} />
          <Route path='/DisplayCard' element={<DisplayCard />} />
          <Route path='/' element={<Welcome />} />
          <Route path='/CreateCardPage' element={<CreateCardPage />} />
          <Route path='/CreateFolderPage' element={<CreateFolderPage />} />
          <Route path='/ImageUpload' element={<Image />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;