/*Sử dụng props*/
export function Input({label, type, placeholder, className}) {
    return (
        <div className="d-flex">
            <label>{label}: </label>
            <input type={type} className={className} placeholder={placeholder}/>
        </div>
    )
}

/*Sử dụng Spread & Rest props*/
export function Input1({label, ...inputProp}) {// Làm tham số cho hàm thì là toán tử rest
    // console.log(inputProp)
    return (
        <div className="d-flex">
            <label>{label}: </label>
            <input {...inputProp}/> {/*Toán tử spread*/}
        </div>
    )
}


export function PropsInput() {
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>PropsInput</h3>
            <Input
                label="UseProps"
                placeholder="DatTQ"
                className="form-control w-25"
            />
            <Input1
                label="Use Spread and Rest Props"
                placeholder="DatTQ"
                className="form-control w-25"
                onFocus={() => console.log(Math.floor(Math.random()*10))}
            />
        </div>
    )
}

