import './App.css';
import {Header} from "./home/header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./home/home";
import {ListUser} from "./user/List";
import {Create} from "./user/Create";
import {Edit} from "./user/Edit";
import {ToastContainer} from "react-toastify";
import {Footer} from "./home/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/list" element={<ListUser/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/edit/:id" element={<Edit/>}></Route>
            </Routes>
            <ToastContainer/>
            <Footer/>
        </div>
    );
}

export default App;
