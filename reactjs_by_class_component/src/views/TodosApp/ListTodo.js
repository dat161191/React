import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import { Color } from "../HOC/Color";


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: Math.floor(Math.random() * 1000) + 1, tittle: 'Play football' },
            { id: Math.floor(Math.random() * 1000) + 1, tittle: 'Watching TV' },
            { id: Math.floor(Math.random() * 1000) + 1, tittle: 'Learn ReactJS' }],
        editTodo: {}
    }

    // Truyền fuction của ListTodo sang AddTodo để lấy dữ liệu add vào listTodos
    addNewTodo = (newTodo) => {
        this.setState({
            listTodos: [...this.state.listTodos, newTodo]
        });
        toast.success("Add is success!!!")
    }
    // Edit Todo : bấm nút Edit (editTodo === null)=> lấy giá trị của todo  set cho editTodo & cần sửa hiển thị lên ô input 
    // Save Todo: bấm nút Save => lưu giá trị của editTodo vào todo trong listTodos có cùng id
    handleEditAndSaveTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmtyTodo = Object.keys(editTodo).length === 0;

        // Save todo
        if (isEmtyTodo === false && editTodo.id === todo.id) {
            // let listTodosCopy = [...listTodos];
            // let obIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
            // listTodosCopy[obIndex].tittle = editTodo.tittle;
            let newListTodo = listTodos.map((item) => {
                if (item.id === todo.id) {
                    item.tittle = editTodo.tittle
                } return item;
            })
            this.setState({
                // listTodos: listTodosCopy,
                listTodos: newListTodo,
                editTodo: ''
            })
            toast.success('Edit is success!!!')
            return;
        }
        // Edit todo
        this.setState({
            editTodo: todo
        })
    }
    // Cập nhật todo Edit vào state editTodo
    handleOnChangeEdit = (event) => {
        let editTodoCoppy = { ...this.state.editTodo };
        editTodoCoppy.tittle = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }

    // Delete Todo
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        });
        toast.success("Delete is success!!!")
    }

    render() {
        // Use destructuring
        let { listTodos, editTodo } = this.state
        // Cú pháp check 1 objeck có rỗng hay không
        let isEmtyTodo = Object.keys(editTodo).length === 0;
        console.log('Check object rỗng ==>' + isEmtyTodo);
        return (
            < div className="list-todo-container" >
                <p>ListTodo</p>
                {/* Truyền addNewTodo() từ ListTodo Component xuống AddTodo Component */}
                <AddTodo addNewTodo={this.addNewTodo} propsListTodo={this.state.listTodos} />

                <div className="list-todo-content">
                    {/* Chức năng R: read trong CRUD */}
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmtyTodo === true ? <span>{index + 1}-{item.tittle} - {item.id}</span> :
                                            <>
                                                {
                                                    editTodo.id === item.id ?
                                                        <span>{index + 1}-<input type="text" value={editTodo.tittle}
                                                            onChange={(event) => this.handleOnChangeEdit(event)} />
                                                        </span> :
                                                        <span>{index + 1}-{item.tittle} - {item.id}</span>
                                                }
                                            </>
                                    }

                                    <button className="btn btn-success ms-1" onClick={() => this.handleEditAndSaveTodo(item)}>
                                        {isEmtyTodo === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="btn btn-danger ms-1" onClick={() => this.handleDeleteTodo(item)}> Delete</button>
                                </div>)
                        })}


                </div>
            </div >
        )
    }
}

export default Color(ListTodo);