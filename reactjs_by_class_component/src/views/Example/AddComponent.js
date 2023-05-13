// Split Component
import React from "react";
class AddComponent extends React.Component {
    state = {
        job: "",
        salary: ""
    }
    handleOnChangeJob = (event) => {
        this.setState({
            job: event.target.value
        });
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault();
        if (!this.state.job || !this.state.salary) {
            alert('Missing params!!!')
            return
        }
        //Truyền dữ liệu từ componet con sang component cha thông qua function của cha truyền cho con 
        this.props.addNewJobs({
            id: Math.floor(Math.random() * 1000),
            job: this.state.job,
            salary: this.state.salary
        });

        this.setState({
            job: '',
            salary: ''
        })
        // console.log("check input", this.state)
    }

    render() {
        return (
            <div>
                Hello AddComponent!!!
                <form>
                    <div className="mb-3 row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="job" className="form-label">Job: </label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" id="job" value={this.state.job}
                                        onChange={event => this.handleOnChangeJob(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="salary" className="form-label">Salary:</label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" id="salary" value={this.state.salary}
                                        onChange={event => this.handleOnChangeSalary(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddComponent;