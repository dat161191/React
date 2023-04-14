const Form = {    //Component
    Input() {    //Function Component
        return <input className="form-control w-25 me-2"/>
    },
    Checkbox() {
        return <input className="form-check-input me-2" type="checkbox"/>
    }
}

export function FormRender() {
    const type = 'Checkbox'
    const Exp = Form[type]; //Tạo checkbox bằng component mới để không vi phạm quy tắc render của react (*)
    return (
        <div id="wapper" className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color:'red'}}>FormRender</h3>
            <div className='d-flex align-items-center justify-content-center'>
                <Form.Input/>
                <Form.Checkbox/>
                <Exp/>      {/*(*)*/}
            </div>

        </div>
    )
}
