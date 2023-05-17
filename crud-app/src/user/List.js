import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert';
import './ModalDetail.css'

export function ListUser() {
const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [userModal, setUserModal] = useState('');

    function getList() {
        axios.get("http://localhost:3000/user").then(res => {
            setList(res.data)
        })
    }

    useEffect(
        () => {
            getList();
        }, [])

    function handleDelete(ele) {
        Swal({
            title: `Bạn có chắc muốn xoá ${ele.name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:3000/user/${ele.id}`).then(() => {
                        getList();
                        Swal(`Xoá thành công ${ele.name}`, {
                            icon: "success",
                        });
                    })
                } else {
                    Swal("Đồ nhát gan!!!!");
                }
            });
    }


    function handleModal(ele) {
        console.log(ele)
        setUserModal(ele);
    }

    return (
        <div style={{
            backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/122/29/89/anime-one-piece-brook-one-piece-franky-one-piece-wallpaper-preview.jpg')",
            backgroundSize: '100vw',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            // width:'100vw'
        }}>
            <div className='pt-2'>
                <table
                    className="table table-dark text-light table-hover align-items-center justify-content-center"
                    style={{width: "98%", marginLeft: "1%"}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Detail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map(ele => (
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                            <td>{ele.phone}</td>
                            <td>{ele.website}</td>
                            <td>
                                <button type="button" className="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#detail"
                                        onClick={() => handleModal(ele)}>
                                    Detail
                                </button>
                            </td>

                            <td><Link to={`/edit/${ele.id}`} className="btn btn-outline-primary">
                                <i className="bi bi-gear-fill"></i></Link></td>

                            <td>
                                <button className="btn btn-outline-danger" onClick={() => handleDelete(ele)}>
                                    <i className="bi bi-trash3-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


            <div className="modal fade" id="detail" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">User Detail</h1>
                        </div>
                        <div className="modal-body bg-black text-danger">
                            <ul>
                                <li>Name: {userModal.name}</li>
                                <li>Email: {userModal.email}</li>
                                <li>UserName: {userModal.username}</li>
                                <li>Phone: {userModal.phone}</li>
                                <li>Website: {userModal.website}</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                            {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
