import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    state = { showJobs: false };
    // Thay đổi trạng thái show hide thông qua sự kiện onClick
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    //Xoá state(dữ liệu) của component cha từ component con từ function của component cha truyền xuống cho con
    handleDelete = (job) => {
        console.log('check handleDelete=>: ', job)
        this.props.deleteJob(job);
    }
    render() {
        console.log("check Props: ", this.props);
        let { showJobs } = this.state;
        // Nhận props từ component cha gởi qua
        let { propArrJob } = this.props;
        return (
            <>
                {/* Dùng conditional ouput (tương tự if hoặc toán tử 3 ngôi) + onClick() để thay đổi trạng thái show hide */}
                {showJobs === false ?
                    <div>
                        <button className="btn-show btn btn-primary" onClick={() => this.handleShowHide()}>Show </button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                propArrJob.map((item, index) => {
                                    return (
                                        <p key={item.id}>
                                            {item.job} - {item.salary} $ <button className="btn btn-primary" onClick={() => this.handleDelete(item)}>Delete</button>
                                        </p>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={() => this.handleShowHide()}>Hide </button>
                        </div>

                    </>}

            </>

        )
    }
}

/**
 * Chỉ nên dùng FunctionComponent khi dùng vs Hook
 */
// const ChildComponent = (props) => {
//     let { propName, propAge, propArrJob } = props;
//     return (
//         <>
//             <div>
//                 <p>ChildComponent functionComponent: {propName} - {propAge}</p>
//                 {
//                     propArrJob.map((item, index) => {
//                         return (
//                             <li key={item.id}>
//                                 {item.job} - {item.salary}
//                             </li>
//                         )
//                     })
//                 }

//             </div>
//         </>

//     )
// }
export default ChildComponent;