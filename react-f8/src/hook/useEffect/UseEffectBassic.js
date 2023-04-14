/* useEffect(callback, [deps])
    * callback: bắt buộc có, là càc hàm do LTV tự viết, thực hiện các side-effect (update DOM, call API, listen event...)
    * [deps]: không bắt buộc*/

/*=============================*/

// 1.useEffect(callback)
// - Gọi callback mỗi khi component re-render => ít dùng
// - Gọi callback sau khi thêm element vào DOM
// 2.useEffect(callback, [])
// - Chỉ gọi callback 1 lần khi component mounted
// 3.useEffect(callback, [deps])
// - [deps] có thể là biến (props) truyền từ bên ngoài vào hay state trong component => truyền vào useEffect.
// - Callback đc gọi lại khi [deps] thay đổi (khi component re-render =>useEffect sẽ kiểm tra [deps] trước và sau
// khi render có khác nhau hay không=> nếu khác thì gọi lại callback)

/*=================================*/

/*Lưu ý
* 1.Callback luôn được gọi sau khi component đc mounted
* 2.Cleanup function luôn đc gọi trướckhi component unmounted
* 3.Clearup function luôn đc gọi trước khi callback được gọi (trừ lần mounted)*/

import {useEffect, useState} from "react";

const tabs = ['posts', 'comments', 'users']

export function Content() {
    const [title, setTitle] = useState('');
    const [datas, setDatas] = useState([]);

    /*  useEffect(callback, []) */
    const [type, setType] = useState('comments');

    /* show + hide button scroll will render UI => create useState*/
    const [showScroll, setshowScroll] = useState(false);

    /* useEffect(callback): api bị gọi lại liên tục vì component re-render khi setTitle => tốn performance*/
    // useEffect(() => {
    //     document.title = title;
    //     /*Call API*/
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json()).then(data => {
    //         setPosts(data);
    //         console.log(data)
    //     })
    // })

    /* useEffect(callback, [])*/
    // useEffect(() => {
    //     console.log(type)
    //     // document.title = title;
    //     /*Call API*/
    //     // fetch(`https://jsonplaceholder.typicode.com/users`)
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => res.json()).then(data => {
    //         setDatas(data);
    //         console.log(data)
    //     })
    // }, [])

    /* useEffect(callback, [deps])*/
    useEffect(() => {
        // console.log(type)
        /*Call API*/
        // fetch(`https://jsonplaceholder.typicode.com/users`)
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json()).then(data => {
            setDatas(data);
            // console.log(data)
        })
    }, [type])

    /*useEffect with DOM event*/
    useEffect(() => {
        /*add event to windows to listen for full page scroll event */

        const handleScroll = () => {
            // console.log(window.scrollY);
            // if (window.scrollY >= 300) {
            //     //show
            //     setshowScroll(true);
            // } else {
            //     //hide
            //     setshowScroll(false);
            // }
            setshowScroll(window.scrollY >= 300);
        }

        window.addEventListener('scroll', handleScroll);

        /* Cleanup function*/
        return ()=>{
            console.log('...unmounted')
            window.removeEventListener('scroll', handleScroll);

        }
    }, [])

    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <div className='d-flex justify-content-center mb-1'>
                {tabs.map(tab => (
                    <button className={type === tab ? 'btn btn-primary me-1' : 'btn btn-danger me-1'} key={tab}
                            onClick={() => setType(tab)}>{tab}</button>
                ))}
            </div>
            <div className='d-flex justify-content-center mb-1'>
                <input value={title} className='form-control w-25'
                       onChange={(event => setTitle(event.target.value))}/>
            </div>
            <table className='table table-dark text-danger table-hover'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                {datas.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.name}</td>
                        <td>{ele.id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showScroll && (
                <button className='btn btn-danger'
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20
                        }} onClick={() => window.scroll(0, 0)}>
                    UP
                </button>)
            }

            {/*<ul>*/}
            {/*    {posts.map(post => (*/}
            {/*        <li key={post.id}>Name: {post.name}, Address: {post.address.city}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    )
}

export function UseEffect() {
    const [show, setShow] = useState(false)
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
            <h3 style={{color: "red"}}>UseEffect</h3>
            {show && <Content/>}
        </div>
    )

}
