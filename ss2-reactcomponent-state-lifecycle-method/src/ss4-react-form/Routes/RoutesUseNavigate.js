import {useNavigate, useParams} from "react-router";

export function Category() {
    let navigate = useNavigate();
    const sendDataToProduct = event => {
        navigate(`/product/${event.target.value}`);
    };
    return (
        <>
            <p>Select a Category:</p>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </>
    );
}

export function Product() {
    let { categoryId } = useParams();
    return (
        <div>
            <h3>Id selected {categoryId} </h3>
        </div>
    );
}
