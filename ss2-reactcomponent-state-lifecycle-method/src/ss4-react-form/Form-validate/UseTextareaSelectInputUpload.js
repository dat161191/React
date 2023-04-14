import React, {useState} from "react";

export function Form() {
    const [textarea, setTextarea] = useState({
        description: "The content of a textarea goes in the value attribute"
    });
    const [select, setSelect] = useState({
        myCar: "",
        color: ""
    })
    const handleOnChange = (event) => {
        setSelect(prev => ({...prev, [event.target.name]: event.target.value}));
    }
    return (
        <form className='bg-black text-light mt-1 mb-1 pt-1 pb-1'>
            <p>SS4: Form - Textarea & Select</p>
            <div>
                <textarea value={textarea.description}/>
            </div>
            <div>
                <select name="myCar" onChange={handleOnChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <select name="color" onChange={handleOnChange}>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="God">God</option>
                </select>
            </div>
            <h6>Your chosen: <span className="text-danger">{select.myCar} </span>
                && Color: <span className="text-danger">{select.color}</span></h6>
        </form>
    );
}

export function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = event => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };
    return (
        <div className='bg-black text-light mt-1 mb-1 pt-1 pb-1'>
            <p>SS4: Form - InputUploadFile</p>
            <input type="file" name="file" onChange={changeHandler}/>
            {isFilePicked ? (
                <div className='text-danger'>
                    <p>FileName: {selectedFile.name}</p>
                    <p>FileType: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );
}
