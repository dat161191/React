import {useState} from "react";

export function TodoList() {
    /*C1:convert JSON string to array to save useState([]) initialization value*/
    // const storageWork=JSON.parse(localStorage.getItem('jsonWork'));
    /* operator ??: Nullish Coalescing Operator
    Returns the value on the left if the value on the left is not null or undefined.
    If the value on the left is null or undefined, the operator will return the value on the right.*/
    // const [works, setWorks] = useState(storageWork ?? []);

    /*C2:initialize the initial value of useState is a function that returns the array stored in localstorage => performance optimization*/
    const [works, setWorks] = useState(() => {
        return JSON.parse(localStorage.getItem('jsonWork'));
    });

    // const [works, setWorks] = useState([]);
    const [work, setWork] = useState('');
    const submitWorks = () => {
        /**/
        setWorks(prev => {
            const newWork = [...prev, work];
            /*convert to JSON to save on localstorage*/
            const jsonWork = JSON.stringify(newWork);
            localStorage.setItem('jsonWork', jsonWork);
            return newWork;
        });
        /*reset the value to '' to clear the value in the input box entered*/
        setWork('');
    }
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>TodoList TwoWayBinding</h3>
            <div className='d-flex justify-content-center mb-1'>
                <input className='form-control mt-1 w-25 text-center ms-5'
                       value={work} onChange={event => setWork(event.target.value)} type="text"/>
            </div>
            <button className='btn btn-primary me-1' onClick={submitWorks}>Add</button>
            <ul>
                {works.map((ele, index) => (
                    <li key={index}>{ele}</li>)
                )}
            </ul>
        </div>
    )

}
