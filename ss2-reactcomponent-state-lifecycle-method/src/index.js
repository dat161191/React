import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// /*Practice5*/
// const root5 = ReactDOM.createRoot(document.getElementById('practice5'));
// root5.render(
//     <ChangeColor/>
// );
//
// /*Pratice6*/
// const root6 = ReactDOM.createRoot(document.getElementById('practice6'));
// root6.render(
//     <ShowNotification/>
// );
//
// /*Practice7*/
// const root7 = ReactDOM.createRoot(document.getElementById('practice7'));
// root7.render(
//     <CheckLoginLogout/>
// );
//
// /*Exercise1*/
// function Execise1() {
//     return (
//         <Alert text="Exercise1: Cảnh báo! Tài nguyên bạn"/>
//     );
// }
//
// const exc1 = ReactDOM.createRoot(document.getElementById('exc1'));
// exc1.render(
//     <Execise1/>
// );
//
// /*Exercise2*/
// const exc2 = ReactDOM.createRoot(document.getElementById('exc2'));
// exc2.render(
//     <Calculator/>
// );
//
// /*Exercise3*/
// const exc3 = ReactDOM.createRoot(document.getElementById('exc3'));
// exc3.render(
//     <DiplayList/>
// )
//
// /*Exercise4*/
// const exc4 = ReactDOM.createRoot(document.getElementById('exc4'));
// exc4.render(
//     <CheckExplanCollapse/>
// )
// /*PROPS*/
// const props = ReactDOM.createRoot(document.getElementById('props'));
// props.render(
//     <Props/>
// )

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
