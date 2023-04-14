import {useState} from "react";

function useClock() {
    const [time, setTime] = useState("");
    const [ampm, setampm] = useState("");

    // Function cập nhật thời gian.
    const updateTime = () => {
        let dateInfo = new Date();
        let hour = 0;
        /* Lấy giá trị của giờ */
        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours();
        }
        /* Lấy giá trị của phút */
        let minutes =
            dateInfo.getMinutes() < 10
                ? parseInt("0" + dateInfo.getMinutes())
                : dateInfo.getMinutes();

        /* Lấy gía trị của giây */
        let seconds =
            dateInfo.getSeconds() < 10
                ? "0" + dateInfo.getSeconds()
                : dateInfo.getSeconds();

        /* Định dạng ngày */
        let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

        /* Cập nhật state */
        setampm(ampm)
        setTime(`${hour}:${minutes}:${seconds}`);
    };

    setInterval(function () {
        updateTime();
    }, 1000);

    return [time, ampm]

}

export function MyClock() {
//Gọi custom hook để sử dụng
    const [time, ampm] = useClock();
    return (
        <div className='bg-black text-light mt-1 mb-1'>
            <h3>Hook Custom</h3>
            <h4>{time}{ampm}</h4>
        </div>
    );
}
