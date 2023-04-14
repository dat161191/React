import './App.css';
import {Counter} from "./ss3-hook/UseState";
import {MyForm, Submit} from "./ss4-react-form/Form-validate/UseFormInReact";
import {FileUploadPage, Form} from "./ss4-react-form/Form-validate/UseTextareaSelectInputUpload";
import {
    FormValidation,
    FormValidationSubmit,
    FormValidationSubmitErr
} from "./ss4-react-form/Form-validate/FormValidation";
import {ValidateFormWithFormik} from "./ss4-react-form/Formik/ValidateFormWithFormik";
import {Routes, Route, Link} from "react-router-dom";
import React from "react";
import {ValidationFormikAndYup} from "./ss4-react-form/Formik/FomikAndYup";
import ReacHookForm from "./ss4-react-form/ReactHookForm/ReacHookForm";
import {Header} from "./ss4-react-form/Routes/Header";
import {MyClock} from "./ss3-hook/HookCustom";
import {Selector} from "./ss3-hook/UseEffect";
import {SelectorCar} from "./ss3-hook/UseEffectCar";
import {Welcome} from "./practice1-use-props-in-component/Welcome";
import ClassComponent from "./practice2-build-class-component/ClassComponent";
import {FunctionComponent} from "./practice3-build-function-component/FunctionComponent";
import EventButton from "./practice4-state-event/EventButton";
import ChangeColor from "./practice5-change-color/ChangeColor";
import {Category, Product} from "./ss4-react-form/Routes/RoutesUseNavigate";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header/>}>
                    {/*===== SS1: FUNCTION,CLASS COMPONENT, PROP, STATE*/}
                    <Route path="/Welcome" element={<Welcome/>}/>
                    <Route path="/ClassComponent" element={<ClassComponent/>}/>
                    <Route path="/FunctionComponent" element={<FunctionComponent/>}/>
                    <Route path="/EventButton" element={<EventButton/>}/>
                    <Route path="/ChangeColor" element={<ChangeColor/>}/>
                    {/*======SS3: HOOK==========*/}
                    <Route path="/Counter" element={<Counter/>}/>
                    <Route path="/Selector" element={<Selector/>}/>
                    <Route path="/MyClock" element={<MyClock/>}/>
                    <Route path="/SelectorCar" element={<SelectorCar/>}/>
                    {/*===== SS4 : FORM, FORMIK, YUP, REACT-HOOK-FORM, ROUTES*/}
                    <Route path="/MyForm" element={<MyForm/>}/>
                    <Route path="/Submit" element={<Submit/>}/>
                    <Route path="/Form" element={<Form/>}/>
                    <Route path="/FileUploadPage" element={<FileUploadPage/>}/>
                    <Route path="/FormValidation" element={<FormValidation/>}/>
                    <Route path="/FormValidationSubmitErr" element={<FormValidationSubmitErr/>}/>
                    <Route path="/FormValidationSubmit" element={<FormValidationSubmit/>}/>
                    <Route path="/ValidateFormWithFormik" element={<ValidateFormWithFormik/>}/>
                    <Route path="/ValidationFormikAndYup" element={<ValidationFormikAndYup/>}/>
                    <Route path="/ReacHookForm" element={<ReacHookForm/>}/>
                    {/*==============Routes=============*/}
                    <Route path="/category" element={<Category />} />
                    <Route path="/product/:categoryId" element={<Product />} />
                </Route>
            </Routes>
        </div>

    );
}

export default App;
