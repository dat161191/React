import {useEffect, useState} from "react";

export function Selector() {
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");
    const choice = e => {
        setSelected(e.target.value);
    };
    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("Angular");
                break;
            case "2":
                setValueSelected("Javascript");
                break;
            case "3":
                setValueSelected("Php");
                break;
            default:
        }
    },[selected]);
    return (
        <div className='bg-black text-light mt-1 mb-1'>
            <h3>Hook useEffect</h3>
            <div className='d-flex justify-content-center'>
                <span>Khoá học: </span>
                <select className='form-select w-25'
                    onChange={e => {
                        choice(e);
                    }}
                >
                    <option value="0">Java</option>
                    <option value="1">Angular</option>
                    <option value="2">Javascript</option>
                    <option value="3">Php</option>
                </select>
            </div>

            <h2>Your selected: {valueSelected}</h2>
        </div>
    );
}
