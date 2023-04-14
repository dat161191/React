import {useEffect, useState} from "react";
import {Content} from "./UseEffectBassic";

function Resize() {
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    })
    return (
        <div>
            <h3>{width}</h3>
        </div>
    )

}

export function UseEffectDomEvent() {
    const [show, setShow] = useState(false)
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
            <h3 style={{color: "red"}}>DOM event Resize</h3>
            {show && <Resize/>}
        </div>
    )
}
