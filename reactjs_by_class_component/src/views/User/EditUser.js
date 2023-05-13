import React from "react";
// React router dom phiên bản 6 không hỗ trợ withRouter nên phải tạo 1 file withRouter(HOC) để hoạt động như phiên bản <6
import withRouter from "./withRouter";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

class EditUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.params) {
            let id = this.props.params.id;
            let results = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: results && results.data && results.data.data ? results.data.data : {}
            })
            // console.log('check result: ',results);
        }
    }
    render() {
        let { params } = this.props;
        let { user } = this.state
        console.log('Param:', params);
        let isEmty = Object.keys(user).length === 0;
        return (
            <div className="text-danger row">
                <div className="col-4"></div>
                <div className="col-4">
                    <form className="bg-dark">
                        <>
                            {isEmty ? <h4>This user does not exist</h4> :
                                <>
                                    <h4>Form Edit User</h4>
                                    <img src={user.avatar} alt="" />

                                    <input type="text" className="form-control" hidden value={user.id} />
                                    <div className="row pt-1">
                                        <div className="col-4">
                                            <label htmlFor="first_name">FirstName:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control w-75" id="first_name" value={user.first_name} />
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-4">
                                            <label htmlFor="last_name">LastName:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control w-75" id="last_name" value={user.last_name} />
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-4">
                                            <label htmlFor="email">Email:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control w-75" id="email" value={user.email} />
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-4">
                                            <label htmlFor="avatar">Avatar:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control w-75" id="email" value={user.avatar} />
                                        </div>
                                    </div>

                                    <div className="pt-1 pb-1">
                                        <button type="submit" className="btn btn-outline-primary me-1">Edit User</button>
                                        <Link to="/user" className="btn btn-outline-success">ListUer</Link>
                                    </div>
                                </>
                            }
                        </>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        )
    }
}
export default withRouter(EditUser);