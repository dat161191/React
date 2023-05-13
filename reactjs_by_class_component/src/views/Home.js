import React from "react";
import { Color } from "./HOC/Color";
import img from '../assets/images/hinh-nen-1.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {
    handleDelete = (user) => {
        console.log(user);
        this.props.deleteUserRedux(user);
    }
    handleCreate = () => {
        this.props.addUserRedux()
     }
    render() {
        console.log('check propsReudx: ', this.props.dataRedux);
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    <p>This is Home Page!</p>
                </div>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"
                        onClick={() => this.handleCreate()} >CreateUser</button>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id} className="pt-2 pb-2">
                                    <span>{index + 1} - FirstName: {item.firstName} - LastName: {item.lastName}</span>
                                    <span>
                                        <button type="submit" className="btn btn-primary ms-2"
                                            onClick={() => this.handleDelete(item)} >Delete</button>
                                    </span>
                                </div>
                            )
                        })}
                </div>
            </>

        )
    }
}

/**
 * Hàm mapStateToProps là một hàm xử lý (handler function) sẽ nhận vào state của store-redux làm tham số đầu vào 
 * Trả về một object có các props muốn truy cập từ store: dataRedux: state.user
 * connect(mapStateToProps)(Color(Home)) sẽ tạo ra một Higher Order Component (HOC) từ component Home
 * Được kết nối đến Redux store thông qua hàm mapStateToProps.
 * =>component Home sẽ có thêm một prop là dataRedux được truyền từ store thông qua hàm mapStateToProps
 * =>các component con bên trong có thể truy cập đến dataRedux thông qua props.
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = (state) => {
    return { dataRedux: state.users };
}
/**
 * mapDispatchToProps là một hàm tạo ra các prop (thuộc tính) dùng để gửi các action đến Redux store thông qua phương thức dispatch(). 
 * Hàm này trả về một đối tượng với các thuộc tính là các hàm (function) được định nghĩa để tương tác với Redux store. 
 * Trong trường hợp này, hàm deleteUser sẽ gửi một action có kiểu là 'DELETE_USER' và truyền đối tượng userDelete như là payload của action.
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: (userDelete) => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 