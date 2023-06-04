drop database if exists enlab_quiz;
CREATE DATABASE IF NOT EXISTS enlab_quiz;
CREATE TABLE questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    question_text VARCHAR(255)
);

CREATE TABLE answer_options (
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    answer_text VARCHAR(255),
    is_correct BOOLEAN,
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
);
INSERT INTO questions (question_text) VALUES
    ('What is the capital of France?'),
    ('Who is CEO of Tesla?'),
    ('The iPhone was created by which company?'),
    ('How many Harry Potter books are there?');
    INSERT INTO answer_options (question_id, answer_text, is_correct) VALUES
    (1, 'New York', FALSE),
    (1, 'London', FALSE),
    (1, 'Paris', TRUE),
    (1, 'Dublin', FALSE),
    (2, 'Jeff Bezos', FALSE),
    (2, 'Elon Musk', TRUE),
    (2, 'Bill Gates', FALSE),
    (2, 'Tony Stark', FALSE),
    (3, 'Apple', TRUE),
    (3, 'Intel', FALSE),
    (3, 'Amazon', FALSE),
    (3, 'Microsoft', FALSE),
    (4, '1', FALSE),
    (4, '4', FALSE),
    (4, '6', FALSE),
    (4, '7', TRUE);
SELECT
    q.question_text AS questionText,
    JSON_ARRAYAGG(JSON_OBJECT('answerText', a.answer_text, 'isCorrect', a.is_correct)) AS answer_options
FROM
    questions q
    INNER JOIN answer_options a ON q.questionId = a.questionId
GROUP BY
    q.question_id, q.question_id;