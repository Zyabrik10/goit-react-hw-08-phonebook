import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout/GlobalLayout';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import Home from './Home/Home';
import PhoneBook from './PhoneBook/PhoneBook';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home/>} />
          <Route path='phone-book' element={<PhoneBook/>} />
          <Route path="login" element={<LogIn/>} />
          <Route path="register" element={<Register/>} />
        </Route>  
      </Routes>
      <ToastContainer />
    </div>
  );
};