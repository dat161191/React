/*Truyền prop basic*/
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";

export function BasicProp({data}) {
    // console.log(data)
    return (
        <ul>
            {data.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

/*Render data = children props*/
export function ChildrenProp({data, children}) {
    // console.log(children)
    return (
        <ul>
            {/*{data.map(item => <li key={item}>{item}</li>)}*/}
            {data.map((ele) => children(ele))}
        </ul>
    )
}

export function RenderProps() {
    const car = ['BMW', 'Ford', 'Toyota']
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color:"red"}}>Props and ChildrenProps</h3>
            <BasicProp data={car}/>
            {/* Use tag open/close to write childrenProp */}
            <ChildrenProp data={car}>
                {/*This method (item) is children props*/}
                {(item) => <li key={item}>{item}</li>}
            </ChildrenProp>
        </div>
    )
}
