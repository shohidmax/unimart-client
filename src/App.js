import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs/Blogs';
import Login from './component/User/Login/Login';
import Signup from './component/User/Signup/Signup';
import Notfound from './component/Notfound/Notfound';
import Requireauth from './component/Requreauth/Requreauth';
import About from './component/About/About';
import Header from './component/Header/Header';
import MyItem from './component/Inventory/MyItem/MyItem';
import AddItem from './component/Inventory/AddItem/AddItem';
import ResetPassword from './component/User/ResetPassword/ResetPassword';
import { ToastContainer } from 'react-toastify';
import ManageInventory from './component/Inventory/ManageInventory/ManageInventory';
import Inventery from './component/Inventory/Inventery';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>about</Route>
        
        <Route path='/Login' element={<Login></Login>}>login</Route>
        <Route path='/Signup' element={<Signup></Signup>}>SignUp</Route>
        <Route path='/addItem' element={<Requireauth><AddItem></AddItem></Requireauth>}>addItem</Route>
        <Route path='/myItem' element={<Requireauth><MyItem></MyItem></Requireauth>}>my Item</Route>
        <Route path='/resetPassword' element={<ResetPassword></ResetPassword>}>resetPassword</Route>
        <Route path='/manageinventory' element={<Requireauth>
          <ManageInventory></ManageInventory>
        </Requireauth>}>manageinventory</Route>
        <Route path="/inventory/:id" element={<Requireauth><Inventery></Inventery></Requireauth>}>Inventery</Route>
        <Route path='*' element={<Notfound></Notfound>}>not found</Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
