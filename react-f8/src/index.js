import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Props from "./props/Props";
import {FormRender} from "./form/Form";
import {ButtonHref} from "./button-href/ButtonHref";
import {Input, PropsInput} from "./form/Input";
import {RenderProps} from "./props/ChildrenProps";
import UseState from "./hook/use-state-two-way-binding/UseState";
import Gift from "./hook/use-state-two-way-binding/GiftRandom";
import App from "./App";

/*PROPS*/
// const props = ReactDOM.createRoot(document.getElementById('props'));
// props.render(
//     <Props/>
// )
/*FORM*/
// const form = ReactDOM.createRoot(document.getElementById('form'));
// form.render(
//     <FormRender/>
// )
/*ButtonHref*/
// const buttonHref = ReactDOM.createRoot(document.getElementById('buttonHref'));
// buttonHref.render(
//     <ButtonHref/>
// )
/*PropsInput*/
// const propsInput = ReactDOM.createRoot(document.getElementById('propsInput'));
// propsInput.render(
//     <PropsInput/>
// )
/*ChildrenProps*/
// const childrenProps = ReactDOM.createRoot(document.getElementById('childrenProp'));
// childrenProps.render(
//     <RenderProps/>
// )
/*Hook: useState*/
// const useState = ReactDOM.createRoot(document.getElementById('useState'));
// useState.render(
//     <UseState/>
// )
/*Gift*/
// const gift
/*App*/

/* Custom event để phát 1 event tuỳ ý: sủ dụng vs bài useEffect ChatApps */
function emitComent(id) {
    /* Tạo 1 fake Comment tự custom event*/
    setInterval(() => {
        window.dispatchEvent(new CustomEvent(
            `lesson-${id}`,
            {detail: `Nội dung comment của lesson-${id}`}
        ))
    },2000)
}
emitComent(1);
emitComent(2);
emitComent(3);
/*==============================================*/

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <div>
        <App/>
    </div>
)
