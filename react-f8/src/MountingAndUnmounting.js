import {useState} from "react";

export function MountingAndUnmounting() {
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>HelloWord</h3>
        </div>
    )
}

export function ShowMountingAndUnmounting() {
    const [show, setShow] = useState(false)
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>MountingAndUnmounting</h3>
            {show && <MountingAndUnmounting/>}
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )

}
