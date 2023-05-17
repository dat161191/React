import React from "react";
// import { Color } from "../HOC/Color";
import axios from 'axios';
// import withRouter from "./withRouter";
import { Link } from 'react-router-dom';


class ListUser extends React.Component {
    state = {
        listUser: [],
        userModalDetail: {}
    }
    // Sử dụng axios để lấy list từ API ảo
    async componentDidMount() {
        let result = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: result && result.data && result.data.data ? result.data.data : []
        })
        // console.log('check result =>: ', result.data)
    }
    handleModalDetail = (uer) => {
        this.setState({
            userModalDetail: uer
        })
    }

    handleClickImg = (user) => {
        console.log('check user: ', this.props);
        this.props.push(`/user/userDetail/:${user.id}`)
    }
    render() {
        let { listUser, userModalDetail } = this.state;
        return (
            <div>
                <p className="text-danger">ListUser</p>
                <table className="table table-hover text-danger table-primary" style={{ width: '98%', marginLeft: '1%' }}>
                    <thead>
                        <tr className="table-dark">
                            <th>STT</th>
                            <th>LastName</th>
                            <th>Avartar</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 && listUser.map((item, index) => (
                            <tr key={item.id}>
                                <td >{index + 1}</td>
                                <td >{item.email}</td>
                                <td>
                                    <img src={item.avatar} alt="ClickMe!" />
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#detail"
                                        onClick={() => this.handleModalDetail(item)}>
                                        Detail
                                    </button>
                                </td>
                                <td>
                                    <Link key={item.id} to={`/user/editUser/${item.id}`} className="btn btn-primary">Edit   </Link></td>
                                <td>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <>
                    <div className="modal fade" id="detail" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 text-danger" id="exampleModalLabel">User Detail</h1>
                                </div>
                                <div className="modal-body bg-black text-danger">
                                    <div className="card text-left">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="card-img-top" src={userModalDetail.avatar} alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title pt-3">FirstName:  {userModalDetail.first_name}</h5>
                                                <h5 className="card-title">LastName:  {userModalDetail.last_name}</h5>
                                                <h5 className="card-title">Email:  {userModalDetail.email}</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                                    {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        )
    }
};
export default ListUser;