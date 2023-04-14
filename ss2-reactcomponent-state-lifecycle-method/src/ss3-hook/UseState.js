import {useState} from "react";

export function Counter() {
    let [count, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(count + 1);
    }
    return (
        <div className='bg-black text-light mt-1 mb-1'>
            <h3>Hook useState</h3>
            <h4>Giá trị {count}</h4>
            <div>
                <button className='btn btn-danger me-1 mb-1' onClick={handleClick}>Tăng</button>
            </div>
        </div>
    );
}
