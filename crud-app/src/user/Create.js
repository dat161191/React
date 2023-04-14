import React from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    username: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    phone: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    website: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

export function Create() {
    const navigate = useNavigate();

    return (
        <div className='text-danger pb-1'
             style={{
                 backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/998/344/989/anime-one-piece-dracule-mihawk-wallpaper-preview.jpg')",
                 backgroundSize: '99vw',
                 backgroundRepeat: 'no-repeat',
                 height: '100vh'
             }}>
            <Formik
                initialValues={{
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    website: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    const user = {
                        name: values.name,
                        username: values.username,
                        email: values.email,
                        phone: values.phone,
                        website: values.website,
                    };
                    axios
                        .post(`http://localhost:3000/user`, user)
                        .then(res => {
                            navigate("/list");
                            toast(`Thêm mới thành công ${values.name}`, {
                                type: "success",
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            })
                        }).catch((error) => {
                        console.log(error);
                    });
                }}
            >
                {({errors, touched}) => (
                    <div className='row'>
                        <div className='col col-3'></div>
                        <div className='col col-6'>
                            <Form className='bg-black mt-2'>
                                <h2>Create User</h2>
                                <div className='mt-1 pe-2 row justify-content-center'>
                                    <div className='col col-3'>
                                        <label htmlFor="name">Name: </label>
                                    </div>
                                    <div className='col col-9'>
                                        <Field class="form-control" id="name" name="name"/>
                                        {errors.name && touched.name ?
                                            <span className='text-danger'> {errors.name}</span> : <br/>}
                                    </div>
                                </div>

                                <div className='mt-1 pe-2 row justify-content-center'>
                                    <div className='col col-3'>
                                        <label htmlFor="username">User Name: </label>
                                    </div>
                                    <div className='col col-9'>
                                        <Field class="form-control" id="username" name="username"/>
                                        {errors.username && touched.username ?
                                            <span className='text-danger'> {errors.username}</span> : <br/>}
                                    </div>
                                </div>

                                <div className='mt-1 pe-2 row justify-content-center'>
                                    <div className='col col-3'>
                                        <label htmlFor="email">Email: </label>
                                    </div>
                                    <div className='col col-9'>
                                        <Field class="form-control" id="email" name="email"/>
                                        {errors.email && touched.email ?
                                            <span className='text-danger'> {errors.email}</span> : <br/>}
                                    </div>
                                </div>

                                <div className='mt-1 pe-2 row justify-content-center'>
                                    <div className='col col-3'>
                                        <label htmlFor="phone">Phone: </label>
                                    </div>
                                    <div className='col col-9'>
                                        <Field class="form-control" id="phone" name="phone"/>
                                        {errors.phone && touched.phone ?
                                            <span className='text-danger'> {errors.phone}</span> : <br/>}
                                    </div>
                                </div>

                                <div className='mt-1 pe-2 row justify-content-center'>
                                    <div className='col col-3'>
                                        <label htmlFor="website">Website: </label>
                                    </div>
                                    <div className='col col-9'>
                                        <Field class="form-control" id="website" name="website"/>
                                        {errors.website && touched.website ?
                                            <span className='text-danger'> {errors.website}</span> : <br/>}
                                    </div>
                                </div>

                                <button className='mb-2 btn btn-outline-light' type="submit">Submit</button>
                            </Form>
                        </div>
                        <div className='col col-3'></div>
                    </div>

                )}
            </Formik>
        </div>

    )
}
