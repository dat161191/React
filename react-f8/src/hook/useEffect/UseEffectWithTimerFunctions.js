import {useEffect, useState} from "react";

function Timer() {
    let [countdown, setCountdown] = useState(180);

    /*Use setInterval() */
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCountdown(prev => prev - 1);
            console.log('countdown...')
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    /*Use setTimeout() */
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setCountdown(countdown - 1);
    //         console.log("timeout...")
    //     }, 1000);
    //
    //     return () => clearTimeout(timeoutId);
    // }, [countdown]);

    return (
        <div>
            <h3>{countdown}</h3>
        </div>
    )
}

function PreviewAvartar() {
    const [avatar, setAvatar] = useState();

    const handelePreviewAvartar = (e) => {
        /* file là 1 object*/
        let file = e.target.files[0];
        /* tạo 1 URL(tạm thời trên trình duyệt) bằng phương thức URL.createObjectURL()*/
        file.url = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    }

    useEffect(() => {
        // Cleanup
        return () => {
            // Kiểm tra avartar nếu đúng => dọn dẹp url cũ
            avatar && URL.revokeObjectURL(avatar.url)
        }
    }, [avatar]);

    return (
        <div>
            <div>
                <input type="file" className='mb-1'
                    // multiple={}
                       onChange={handelePreviewAvartar}/>
            </div>
            <div>
                {avatar && (
                    <img src={avatar.url} width='80%' alt=""/>
                )}
            </div>
        </div>
    )
}

export function TimerFuction() {
    const [show, setShow] = useState(false)
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <div>
                <h3 style={{color: "red"}}>UseEffectWithTimerFunctions</h3>

                {show && <Timer/>}
            </div>
            <div>
                <h3 style={{color: "red"}}>Cleanup: PreviewAavartar</h3>
                {show && <PreviewAvartar/>}
            </div>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>

        </div>
    )
}
