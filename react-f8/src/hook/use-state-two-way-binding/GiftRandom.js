import {useState} from "react";

const giftList = ["IPhone13", "Xe Vission", "Tivi LG"]

function Gift() {
    const [gift, setGift] = useState();
    const randomGift = () => {
        const index = Math.floor(Math.random() * giftList.length)
        setGift(giftList[index])
    }
    return (
        <div className="pb-1 bg-black text-light">
            <h3 style={{color: 'red'}}>Hook useState()</h3>
            <h5>{gift || ' Chưa có phần thưởng'}</h5>  {/*if there is reward show reward else show 'Chưa có phần thưởng' */}
            <button className="btn btn-danger" onClick={randomGift}>Lấy phần thưởng</button>
        </div>
    )
}

export default Gift;
