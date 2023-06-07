import React, { useEffect, useState } from "react";
import getQuizService from "../../service/quizAPiService";
import "./QuizApi.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const QuizApi = () => {
    const [quizs, setQuizs] = useState([{
        category: "",
        correct_answer: "",
        difficulty: "",
        incorrect_answers: [],
        question: "",
        type: ""
    }]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const { correct_answer, incorrect_answers, question, category, difficulty } = quizs[activeQuestion];
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
    const [showResult, setShowResult] = useState(false);
    // Tạo các state để tính toán thời gian làm bài test
    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();
    const [totalTime, setTotalTime] = useState();

    // Loading trong thời gian lấy dữ liệu từ API
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const newTimeStart = Date.now();
        setTimeStart(newTimeStart);
        getQuizs();
    }, [])
    // Lấy 1 đáp đúng nối vào mảng đáp án sai để tạo mảng câu trả lời 
    const correctAnswers = [...incorrect_answers];
    const [random, setRandom] = useState(null);
    correctAnswers.splice(random, 0, correct_answer);
    // Lấy dữ liệu từ API thông qua phương thức getQuizService() đã tạo ở service
    const getQuizs = async () => {
        setLoading(true);
        let response = await getQuizService();
        console.log("check respone: ", response.results);
        setQuizs(response && response.results ? response.results : []);
        const newRamdom = Math.floor(Math.random() * (response.results[0].incorrect_answers.length - 1));
        setRandom(newRamdom);
        setLoading(false);
    }
    // Active đáp án được chọn và kiểm tra đáp án đúng hay sai
    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correct_answer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }
    /**
     * Sự kiện khi bấm next.Nếu chưa chọn đáp án thì button Next sẽ disable.
     * Set lại result với thông tin điểm, số câu trả lời đúng hoặc sai.Dùng toast để thông báo kq của người dùng
     * Kiểm tra nếu câu hỏi là câu cuối cùng = quizs.length - 1  thì hiển thị tổng đáp án đúng sai và thời gian làm quiz
     * Nếu câu hỏi != quizs.length - 1 thì bấm next qua câu tiếp theo
     */

    const onClickNext = () => {
        console.log("Check length: ", incorrect_answers.length)
        const newRamdom = Math.floor(Math.random() * (incorrect_answers.length - 1));
        setRandom((...prev) => prev = newRamdom);
        console.log("random: ", random)
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (selectedAnswer) {
            toast.success("The answer you chose is correct: You are excellent!")
        } else {
            toast.warning("You chose the wrong one. The correct answer is: " + correct_answer);
        }
        if (activeQuestion !== quizs.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            const newTimeEnd = Date.now();
            setTimeEnd(newTimeEnd);
            const newTotalTime = (newTimeEnd - timeStart) / 1000;
            setTotalTime(newTotalTime);
            setActiveQuestion(0);
            setShowResult(true);
        }
    }

    // Hàm sử lý khi người dùng bấm nút làm lại
    const PlayAgain = () => {
        setShowResult(false);
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0
        });
        const newTimeStart = Date.now();
        setTimeStart(newTimeStart);
        getQuizs();
    }

    return (
        <div className="quizApi">
            {loading ? <i className="fa-solid fa-spinner fa-spin-pulse text-light" style={{ fontSize: "40px" }}> Loading</i>
                :
                <div className="quizApi-container">
                    {!showResult ? (
                        <div>
                            <div>
                                <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                                <span className="total-question">/{addLeadingZero(quizs.length)}</span>
                            </div>
                            <h2>* Question: <span className="text-danger"> {question}</span></h2>
                            <h2>* Category: <span className="text-danger">{category}</span></h2>
                            <h2>* Level: <span className="text-danger">{difficulty}</span></h2>

                            <ul>
                                {correctAnswers.map((answer, index) => (
                                    <li
                                        onClick={() => onAnswerSelected(answer, index)}
                                        key={answer}
                                        className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-right">
                                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                    {activeQuestion === quizs.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="result">
                            <h3>Result</h3>
                            <p>
                                Total Question: <span>{quizs.length}</span>
                            </p>
                            <p>
                                Correct Answers:<span> {result.correctAnswers}</span>
                            </p>
                            <p>
                                Wrong Answers:<span> {result.wrongAnswers}</span>
                            </p>
                            <p>
                                Total Score:<span> {result.score}</span>
                            </p>
                            <p>
                                Total Time:<span> {totalTime} s</span>
                            </p>
                            <div className="d-flex justify-content-center   align-items-center">
                                <i className="fa-solid fa-rotate btn again" onClick={() => PlayAgain()} style={{ fontSize: "25px", color: "white" }}></i>
                                <Link to="/"><i className="bi bi-house-heart-fill btn backHome" style={{ fontSize: "25px", color: "white" }}></i> </Link>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );

}

export default QuizApi;