import React, {useEffect} from "react";
import {NavLink, Outlet} from "react-router-dom";
import ChangeColor from "../../practice5-change-color/ChangeColor";


export function Header() {
    return (
        <>
            <header className="bg-black text-light mt-1 mb-1">
                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/Welcome"> SS2(PROP) Welcome |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/ClassComponent"> SS2 ClassComponent |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/FunctionComponent"> SS2 FunctionComponent |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/EventButton"> SS2(PROP+STATE) EventButton |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/ChangeColor"> SS2(PROP+STATE) ChangeColor |</NavLink>


                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/Counter"> SS3(useState) Counter |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/Selector">SS3(useEffect) Selector |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/MyClock">SS3(Custom Hook) MyClock |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/SelectorCar">SS3(useEffect) SelectorCar |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/MyForm">SS4(Form) MyForm |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/Submit">SS4(Form) Submit |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/Form">SS4(Form) Form |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/FileUploadPage">SS4(Form) FileUploadPage |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/FormValidation">SS4(CustomValidate) FormValidation |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/FormValidationSubmitErr">SS4(CustomValidate) FormValidationSubmitErr |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/FormValidationSubmit">SS4(CustomValidate) FormValidationSubmit |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/ValidateFormWithFormik">SS4(Formik) ValidateFormWithFormik |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/ValidationFormikAndYup">SS4(FormikAndYup) ValidationFormikAndYup |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/ReacHookForm">SS4 ReacHookForm |</NavLink>
                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/category">SS4(UseNavigate) Category |</NavLink>

            </header>
            <Outlet/>
        </>
    )
}
