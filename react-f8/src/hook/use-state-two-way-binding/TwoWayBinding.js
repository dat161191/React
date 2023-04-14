import {useState} from "react";

const data = [{id: 1, courseName: 'HTML,CSS'}, {id: 2, courseName: 'Java'}, {id: 3, courseName: 'JavaScript'}]

export function TwoWayBindingRadio() {
    const [checked, setChecked] = useState(2);  /* create variable checked to get id when click submit*/
    function submitCheckBox() {
        /*CALL API by id*/
        console.log({id: checked})
    }

    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>Two way binding radio</h3>
            {/* array filter */}
            {data.map(ele => (
                <div key={ele.id}>
                    <input type="radio" className='mt-1 ms-5'
                           checked={checked === ele.id}
                           onChange={() => setChecked(ele.id)}/>
                    {ele.courseName}
                </div>
            ))}
            <button className='btn btn-primary' onClick={submitCheckBox}>Register
            </button>
        </div>
    )

}

export function TwoWayBindingCheckBox() {
    /* create variable checked to get id when click submit
    * select multiple items to include in the array
    * => useState is array*/
    const [checked, setChecked] = useState([]);
    /*get id from onChange event to put in useState array
    * use operator spread to save old value when select add*/
    const handleCheckBox = (id) => {
        setChecked(preId => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                /* use filter to filter out a new array containing elements with id different from the selected id
                *  <=> unchecked*/
                return checked.filter(ele => ele != id)
            } else {
                return [...preId, id]
            }

        })
    }
    // console.log(checked);

    const submitCheckBox = () => {
        /*CALL API by id*/
        // console.log({ids: checked})
    }

    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>Two way binding checkbox</h3>
            {/* array filter
            use checked.includes(ele.id) to check id is in array? if true is checked*/}
            {data.map(ele => (
                <div key={ele.id}>
                    <input type="checkbox" className='mt-1 ms-5'
                           checked={checked.includes(ele.id)}
                           onChange={() => handleCheckBox(ele.id)}/>
                    {ele.courseName}
                </div>
            ))}
            <button className='btn btn-primary' onClick={submitCheckBox}>Register
            </button>
        </div>
    )

}

export function TwoWayBinding() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const submit = () => {
        alert(name + "," + email)
    }
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>Two way binding</h3>
            <div className='ms-5'>
                <input type="text" className='form-control mt-1 w-25'
                       value={name} onChange={event => setName(event.target.value)}/>
                <h3 style={{color: "white"}}>{name}</h3>
                <input type="text" className='form-control mt-1 w-25'
                       value={email} onChange={event => setEmail(event.target.value)}/>
                <h3 style={{color: "white"}}>{email}</h3>

                <button className='btn btn-primary' onClick={() => {
                    setName('Jine')
                    setEmail('jine@gmail.com')
                }}>TwoWayBinding
                </button>
                <button className='btn btn-primary' onClick={submit}>Register
                </button>
            </div>

        </div>
    )

}
