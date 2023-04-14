export function DiplayList() {
    const list = [{name: 'An', age: 18, point: 9}, {name: 'Lan', age: 18, point: 9}]
    return (
        <div className="row">
            <div class="col-2"><h1>Exercise1</h1></div>
            <div class="col-9">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Point</th>
                    </tr>
                    </thead>
                    <tbody>

                    {list.map(item => <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.point}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    )

}
