import React, {useState} from "react";

/* Cập nhập khi dữ liệu có sự thay đổi*/
export const MyForm = () => {
    const [username, setUsername] = useState("");
    const handleChange = event => setUsername(event.target.value);
    let header;
    if (username) {
        header = <h4>Hello {username}</h4>;
    } else header = "";
    return (
        <div className='bg-black text-light mt-1 mb-1 pb-1'>
            <form>
                <h3 className='text-danger'>Ex4: Form</h3>
                <h4>Enter your name: {header}
                </h4>

                <div className='d-flex justify-content-center'>
                    <input className='form-control w-25' type="text"
                           onChange={handleChange}/>
                </div>

            </form>
        </div>

    );
};

/* Form submit*/

/*B1:Khởi tạo function component return về 1 form */
export function Submit() {
    /* B2: Tạo một state để khởi tạo giá trị ban đầu và lưu trữ các giá trị nhập vào từ form.*/
    const [state, setState] = useState({
        username: "",
        age: null
    });

    /* B5: Viết hàm xử lý khi người dùng submit*/
    const submitHandler = event => {
        event.preventDefault();
        // Call API + xử lý dữ liệu
        alert("SỦ DỤNG ĐỂ CALL API: " + state.username + " " + state.age + "t");
    };

    /* B4: Viết hàm xử lý sự kiện onChange để cập nhật giá trị của state (setState) với giá trị nhập vào từ form.
    -  Giá trị trả về là 1 event khi có sự thay đổi.*/
    const handleChange = event => {
        console.log(event);
        console.log("name ===> " + event.target.name);
        console.log("value ===> " + event.target.value);
        setState({...state, [event.target.name]: event.target.value});
    }
    return (
        <div className='bg-black text-light mt-1 mb-1 pb-1'>
            {/* B1: tạo form
             - B6: gắn hàm xử lý dữ liệu khi người dùng submit thông qua hàm onSubmit()*/}
            <form onSubmit={submitHandler}>
                <h3 className='text-danger'>Ex4: SubmitForm</h3>

                <h3>
                    Hello: {state.username}, Age: {state.age}t
                </h3>
                <p>Enter your name:</p>
                {/*B3: Thiết lập các element trong form (input,checkbox...)
                - Nhận giá trị khi có sự thay đổi thông qua sự kiện onChange */}
                <input type="text" name="username" onChange={handleChange}/>
                <p>Enter your age:</p>
                <input type="text" name="age" onChange={handleChange}/>
                {/*==============*/}
                <input type="submit"/>
            </form>
        </div>
    );
}
