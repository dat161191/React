import {useState} from "react";
import {Formik} from "formik";

export function ValidateFormWithFormik() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        if (!form.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div className='bg-black text-light mt-1 mb-1 pb-1'>
            <p>Sign up: Validate with Formik</p>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}/>
                            <span className="text-danger"> {errors.email}</span>
                        </div>
                        <div
                            className={`custom-input ${errors.password ? "custom-input-error" : ""}`}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={handleChange}/>
                            <span className="text-danger"> {errors.password}</span>
                        </div>
                        <button className="mt-1 btn btn-danger" type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
