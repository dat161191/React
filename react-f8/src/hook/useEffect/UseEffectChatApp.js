import {useEffect, useState} from "react";

const lessons = [
    {
        id: 1, name: 'React là gì?'
    }, {
        id: 2, name: 'Arrow function?'
    }, {
        id: 3, name: 'DOM event?'
    }
]

function ChapApp() {
    const [lessonId, setLessonId] = useState(1);

    /*====== Lắng nghe Custom event ở file index.js =======*/
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)

    }, [lessonId])

    /*============Render============*/
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}
                        style={{color: lessonId === lesson.id ? 'blue' : 'white'}}
                        onClick={() => setLessonId(lesson.id)}>
                        {lesson.name}</li>
                ))}
            </ul>
        </div>
    )


}

export function ChatApps() {
    const [show, setShow] = useState(false)
    return (
        <div className="mt-1 pt-1 pb-1 bg-black text-light">
            <h3 style={{color: "red"}}>UseEffect: ChatApps</h3>
            {show && <ChapApp/>}
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )

}
