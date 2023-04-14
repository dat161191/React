import {useState} from "react";

function UseState() {
    const salary = [100, 200, 300];
    // const total = salary.reduce((total, ele) => total + ele);
    // console.log(total)
    // const [sum, setSum] = useState(total)

    /*Sử dụng callback để giá trị khởi tạo không khởi tạo nhiều lần*/
    const [sum, setSum] = useState(() => {
        // console.log("Total: " + total);
        return salary.reduce((total, ele) => total + ele);
    })

    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        /* setState use with callback*/
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
    }
    // console.log(counter)

    const changeSum = () => {
        setSum(sum + 10)
    }
    // console.log("Sum: " + sum)
    return (
        <div className="useState bg-black mt-1 pt-1 text-light" style={{padding: 20}}>
            <h3 style={{color:"red"}}>Hook useState()</h3>
            <h5>Counter useState: {counter}</h5>
            <button onClick={handleIncrease} className="btn btn-primary">Increase</button>
            <h5>Sum useState: {sum} </h5>
            <button onClick={changeSum} className="btn btn-dark">Change</button>
        </div>
    )
}

export default UseState;
