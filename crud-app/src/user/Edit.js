import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Edit is Success!", {
    type: "success",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

function googleClick() {
    if (Notification.permission === 'granted') {
        new Notification('Thông báo', {
            body: 'Chỉnh sửa thành công',
            image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/3/25/793233/Wonder-Woman-1.jpg',
        });
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Thông báo', {
                    body: 'Đây là nội dung của thông báo ',
                    icon: 'https://play.google.com/store/apps/details?id=com.bandainamcoent.dblegends_ww&hl=vi'
                });
            }
        });
    }
}

export function Edit() {
    const regexPhone = {phone: /[0][9][0-9]{7}/}
    const {id} = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [userForm, setUserForm] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`).then(res => {
            setUserForm(res.data)
        })
    }, [id]);

    const handleChange = (event) => {
        setUserForm({...userForm, [event.target.name]: event.target.value})
    }

    function handleValidate() {
        const errors = {};
        if (!userForm.name) {
            errors.name = "Required"
        } else if (userForm.name.length < 3) {
            errors.name = "To Short"
        }
        if (!userForm.username) {
            errors.username = "Required"
        }
        if (!userForm.email) {
            errors.email = "Required"
        }
        if (!userForm.phone) {
            errors.phone = "Required"
        } else if (!regexPhone.phone.test(userForm.phone)) {
            errors.phone = "SDT not format"
        }
        if (!userForm.website) {
            errors.website = "Required"
        }
        return errors;
    }

    function handleSubmit() {
        axios.put(`http://localhost:3000/user/${id}`, userForm).then(() => {
            navigate("/list");
            googleClick();
        })
    }

    return (
        <div className='row'
             style={{
                 backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/857/67/782/spider-man-homecoming-2017-wallpaper-preview.jpg')",
                 backgroundSize: '100vw',
                 backgroundRepeat: 'no-repeat',
                 height: '100vh',
                 // width:'100vw'
             }}>
            <div className='col col-3'></div>
            <div className='col col-6'>
                <Formik initialValues={userForm}
                        validate={handleValidate}
                        onSubmit={handleSubmit}>
                    {({errors, handleSubmit}) => (
                        <form className='bg-black text-light mt-1 mb-1 pb-1' onSubmit={handleSubmit}>
                            <h1>Edit User</h1>
                            <div className={`row pe-2 custom-input ${errors.name ? "custom-input-error" : ""}`}>
                                <div className='col col-4'>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className='col col-8'>
                                    <input className='form-control'
                                           type="text" id="name"
                                           name="name"
                                           value={userForm.name || ""}
                                           onChange={handleChange}/>
                                    {errors.name ? <span className="text-danger"> {errors.name}</span> :
                                        <span><br/></span>}

                                </div>
                            </div>

                            <div
                                className={`row mt-1 pe-2 custom-input ${errors.username ? "custom-input-error" : ""}`}>
                                <div className='col col-4'>
                                    <label htmlFor="username">User Name</label>
                                </div>
                                <div className='col col-8'>
                                    <input className='form-control'
                                           type="text" id="username"
                                           name="username"
                                           value={userForm.username || ""}
                                           onChange={handleChange}/>
                                    {errors.username ? <span className="text-danger"> {errors.username}</span> :
                                        <span><br/></span>}

                                </div>
                            </div>

                            <div className={`row mt-1 pe-2 custom-input ${errors.email ? "custom-input-error" : ""}`}>
                                <div className='col col-4'>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className='col col-8'>
                                    <input className='form-control'
                                           type="text" id="email"
                                           name="email"
                                           value={userForm.email || ""}
                                           onChange={handleChange}/>
                                    {errors.email ? <span className="text-danger"> {errors.email}</span> :
                                        <span><br/></span>}

                                </div>
                            </div>

                            <div className={`row mt-1 pe-2 custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                                <div className='col col-4'>
                                    <label htmlFor="phone">Phone</label>
                                </div>
                                <div className='col col-8'>
                                    <input className='form-control'
                                           type="text" id="phone"
                                           name="phone"
                                           value={userForm.phone || ""}
                                           onChange={handleChange}/>
                                    {errors.phone ? <span className="text-danger"> {errors.phone}</span> :
                                        <span><br/></span>}
                                </div>
                            </div>

                            <div className={`row mt-1 pe-2 custom-input ${errors.website ? "custom-input-error" : ""}`}>
                                <div className='col col-4'>
                                    <label htmlFor="website">Website</label>
                                </div>
                                <div className='col col-8'>
                                    <input className='form-control'
                                           type="text" id="website"
                                           name="website"
                                           value={userForm.website || ""}
                                           onChange={handleChange}/>
                                    {errors.website ? <span className="text-danger"> {errors.website}</span> :
                                        <span><br/></span>}
                                </div>
                            </div>

                            <button className='mb-2 btn btn-outline-light' type="submit">Submit</button>
                        </form>
                    )}

                </Formik>
            </div>
            <div className='col col-3'></div>
        </div>
    )

}
