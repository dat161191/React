function Button({tittle, href, onClick}) {
    let Component = 'button'; //Tạo 1 component có default là button để ti thay thế bằng thẻ a
    const props = {};
    if (onClick) {
        props.onClick = onClick;    //nếu đúng là onclick thì lấy method onClick() thêm vào props với giá trị bằng tham số onClick
    }
    // console.log(props)
    return (
        <div>
            <Component className="btn btn-primary" href={href}>{tittle}</Component>
        </div>
    )

}

export function ButtonHref() {
    let number = 0;
    return (
        <div id='wapper' className="mb-1">
            <h3 style={{color:'red'}}>Event React</h3>
            <Button
                tittle='Click me!'
                href='https://fullstack.edu.vn/learning/reactjs?id=f106ce66-7cfa-4963-94ad-81e96945a576'
                onClick={() => number + 1}
            />
        </div>
    )
}
