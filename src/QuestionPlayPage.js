import React, { useState, useEffect } from 'react';
import './QuestionPlayPage.css'; // Import CSS file for styling
import { Container, Box, Button, Radio, FormControlLabel, RadioGroup, Typography, AppBar, Toolbar } from '@mui/material';

function QuestionPlayPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    const fetchedQuestions = [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      // Add more questions here
    ];
    setQuestions(fetchedQuestions);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption('');
  };

  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption('');
  };

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = selectedOption === currentQuestion.correctAnswer;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: {
        selectedOption,
        isCorrect: isAnswerCorrect
      }
    }));
  };

  const renderOptions = (options) => {
    return (
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
            className="option-label"
          />
        ))}
      </RadioGroup>
    );
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return null;
    return (
      <Box className="question-box">
        <Typography variant="h6" className="question-text">{currentQuestion.question}</Typography>
        {renderOptions(currentQuestion.options)}
      </Box>
    );
  };

  return (
    <Container className="question-play-page-container">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="app-title">
            Question Play Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className="content">
        {renderCurrentQuestion()}
      </Box>
      <Box className="footer">
        <Button
          variant="contained"
          onClick={handlePreviousClick}
          disabled={currentQuestionIndex === 0}
          className="navigation-button"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextClick}
          disabled={currentQuestionIndex === questions.length - 1}
          className="navigation-button"
        >
          Next
        </Button>
      </Box>
      <Box className="submit-button-container">
        <Button variant="contained" color="primary" onClick={handleAnswerSubmit} className="submit-button">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default QuestionPlayPage;
