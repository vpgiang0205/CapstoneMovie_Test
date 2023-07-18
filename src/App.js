import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AdminTemplate from './pages/AdminTemplate'
import AddUser from './pages/AdminTemplate/AddUser'
import Dashboard from './pages/AdminTemplate/Dashboard'

import HomeTemplate from './pages/HomeTemplate'
import AboutPage from './pages/HomeTemplate/AboutPage'
import HomePage from './pages/HomeTemplate/HomePage'
import ListMoviePage from './pages/HomeTemplate/ListMoviePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/** Home */}
          <Route path='' element={<HomeTemplate />}>
            <Route path='' element={<HomePage />} ></Route>
            <Route path='about' element={<AboutPage />} ></Route>
            <Route path='list-movie' element={<ListMoviePage />} ></Route>
          </Route>

          {/** Admin */}
          <Route path='admin' element={<AdminTemplate />}>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='add-user' element={<AddUser />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
