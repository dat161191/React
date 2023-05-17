import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        tittle: ''
    }
    //Nhận props từ ListTodo
    listTodo = this.props.propsListTodo;

    // Tạo hàm random id
    randomizeId = () => {
        let newId = Math.floor(Math.random() * 1000) + 1; // Tạo một ID mới ngẫu nhiên

        // Duyệt qua mảng và kiểm tra ID của các phần tử
        for (let i = 0; i < this.listTodo.length; i++) {
            if (this.listTodo[i].id === newId) { // Nếu tìm thấy ID trùng
                toast.info('Id is duplicate')
                return this.randomizeId(); // Gọi đệ quy để tạo ID mới khác
            }
        }
        // Nếu không tìm thấy ID trùng, trả về ID mới
        return newId;
    }
    // set lại giá trị state khi có sự thay đổi trong ô input
    handleOnChange = (event) => {
        this.setState({
            tittle: event.target.value
        })
        console.log(this.state.tittle)
    }
    // Xử lý dữ liệu khi bấm submit
    handleOnClick = (event) => {
        console.log(this.listTodo);
        event.preventDefault();
        if (!this.state.tittle) {
            toast.warn('Missing Param');
            return
        }
        let newTodo = {
            id: this.randomizeId(),
            tittle: this.state.tittle
        };

        this.props.addNewTodo(newTodo);
        this.setState({
            tittle: ''
        })
    }

    render() {
        let { tittle } = this.state;
        return (
            <div className="add-todo row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-10">
                            <input type="text" className="form-control" value={tittle} onChange={(event) => this.handleOnChange(event)} />
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary" onClick={(event) => this.handleOnClick(event)}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        )
    }
}
export default AddTodo;