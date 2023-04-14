import React, {useState} from "react";

export function FormValidation() {
    const [form1, setForm1] = useState({
        username: "",
        age: null
    });
    const handleChange = event => {
        if (event.target.name === 'age') {
            if (!Number(event.target.value)) {
                alert("<" + event.target.value + ">" + " không phải định dạng tuổi")
                event.target.value = '';
            } else {
                alert("Nhập thông tin thành công")
            }
        }
        setForm1({...form1, [event.target.name]: event.target.value});
    };

    return (
        <form className='bg-black text-light mt-1 mb-1 pb-1'>
            <p>SS4: FormValidation</p>
            <h4>
                Hello {form1.username} , Age: {form1.age}
            </h4>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange}/>
        </form>
    );
}


export function FormValidationSubmitErr() {
    const [form3, setForm3] = useState({
        username: "",
        age: null,
        errormessage: ""
    });
    const handleChange = event => {
        let err = "";
        if (event.target.name === 'age') {
            if (!Number(event.target.value)) {
                err = event.target.value + " :Không phải định dạng tuổi";
            } else {
                alert("Nhập thông tin thành công")
            }
        } else if (event.target.name === 'username') {
            if (event.target.value.length < 3) {
                err = event.target.value + " :Tên quá ngắn";
            } else {
                alert("Nhập thông tin thành công");
            }
        }
        setForm3({...form3, [event.target.name]: event.target.value, errormessage: err});

    };

    return (
        <form className='bg-black text-light mt-1 mb-1 pb-1'>
            <p>SS4: FormValidation</p>
            <h6>
                Hello User: {form3.username} , Age {form3.age}
            </h6>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange}/>
            <p className="text-danger"> {form3.errormessage} </p>

        </form>
    );
}

export function FormValidationSubmit() {
    const [form2, setForm2] = useState({
        username: "",
        age: null
    });

    const handleChange = event => {
        if (event.target.name === 'age') {
            if (!Number(event.target.value)) {
                // event.target.value = '';
            }
        }
        setForm2({...form2, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!Number(form2.age)) {
            alert("<" + form2.age + ">" + " không phải định dạng tuổi")
        } else {
            alert("Submit thành công")
        }
    };
    return (
        <form className='bg-black text-light mt-1 mb-1 pb-1' onSubmit={handleSubmit}>
            <p>SS4: FormValidation</p>
            <h6>
                Hello {form2.username}; Age: {form2.age}
            </h6>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
    );
}
