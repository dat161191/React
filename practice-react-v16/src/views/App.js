import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent';
import ListTodo from './TodosApp/ListTodo';
import Nav from './Nav/Nav';
import Home from './Home';
import ListUser from './User/ListUser'
import EditUser from './User/EditUser';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/myComponent" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/editUser/:id" element={<EditUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
