import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    // state là 1 object: {key:value}
    state = {
        //state là object or 1 mảng
        arrJob: [
            { id: 0, job: "Dev", salary: 500 },
            { id: 1, job: "Tester", salary: 400 },
            { id: 2, job: "Manager", salary: 1000 }]
    }
    /**
     * componentDidMount() được gọi ngay lập tức sau khi một component được mount
     khi một component được hiển thị lần đầu tiên trên trang web.  (được chèn vào DOM).
     */
    componentDidMount() {
        console.log('>>> chạy sau khi component được mount vào DOM')
    }

    /**
     * componentDidUpdate() được gọi ngay lập tức sau khi quá trình cập nhật diễn ra. 
     * Phương thức này không được gọi cho lần render đầu tiên.
     */
    componentDidUpdate(prevProps, prevStates) {
        console.log('>>> component didUpdate', ' prevProps => ', prevProps, ' current prop => ', this.props);
        console.log('>>> component didUpdate', ' prevStates => ', prevStates, ' current prop => ', this.state);

    }

    /**
     * Function cập nhật lại state của component cha (MyComponent) khi (submit) dữ liệu từ component con (AddComponent) 
     */
    addNewJobs = (job) => {
        console.log('check param from child:=> ', job);
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    // Xoá dữ liệu (state) của component cha từ dữ liệu component con gởi lên
    deleteJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }
    render() {
        console.log('=>>> component re-render', this.state)
        return (
            <>
                <div className="text-danger">
                    {/* Truyền function của cha xuống con */}
                    <AddComponent addNewJobs={this.addNewJobs} />

                    {/* Truyền function và props của cha xuống con */}
                    <ChildComponent propArrJob={this.state.arrJob} deleteJob={this.deleteJob} />
                </div>
            </>

        )
    }
}
export default MyComponent;