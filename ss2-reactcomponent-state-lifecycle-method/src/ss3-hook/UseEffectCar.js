import {useEffect, useState} from "react";

export function SelectorCar() {
    let [selectedCar, setSelectedCar] = useState('');
    let [selectedColor, setSelectedColor] = useState('');
    let [valueSelectedCar, setValueSelectedCar] = useState("");
    let [valueSelectedCorlor, setValueSelectedColor] = useState("");
    const choiceCar = e => {
        setSelectedCar(e.target.value);
    };
    const choiceColor = e => {
        setSelectedColor(e.target.value);
    };
    useEffect(() => {
        switch (selectedCar) {
            case "0":
                setValueSelectedCar("BMW");
                break;
            case "1":
                setValueSelectedCar("Ford");
                break;
            case "2":
                setValueSelectedCar("Lambor");
                break;
            default:
        }
    }, [selectedCar]);
    useEffect(() => {
        switch (selectedColor) {
            case "0":
                setValueSelectedColor("Red");
                break;
            case "1":
                setValueSelectedColor("Blue");
                break;
            case "2":
                setValueSelectedColor("Black");
                break;
            default:
        }
    }, [selectedColor]);

    return (
        <div className='bg-black text-light mt-1 mb-1'>
            <h3>Hook useEffect selected Car</h3>
            <div className='d-flex justify-content-center'>
                <span>Loại xe: </span>
                <select className='form-select w-25 ms-1'
                        onChange={e => {
                            choiceCar(e);
                        }}
                >
                    <option value="0">BMW</option>
                    <option value="1">Ford</option>
                    <option value="2">Lambor</option>
                </select>
            </div>

            <div className='d-flex justify-content-center mt-1'>
                <span>Màu: </span>
                <select className='form-select w-25 ms-1'
                        onChange={e => {
                            choiceColor(e);
                        }}
                >
                    <option value="0">Red</option>
                    <option value="1">Blue</option>
                    <option value="2">Black</option>
                </select>
            </div>

            <h2>Your selected: {valueSelectedCar} - {valueSelectedCorlor}</h2>
        </div>
    );
}
