import React, { useEffect } from "react";
import Heading from "./components/Heading";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import Question from "./components/Question";
import Options from "./components/Options";
import Result from "./components/Result";

function App() {
  const allQuestions = [
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      answerOptions: [
        { ansText: "Venus", isCorrect: false },
        { ansText: "Mars", isCorrect: true },
        { ansText: "Jupiter", isCorrect: false },
        { ansText: "Saturn", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is the chemical symbol for gold?",
      answerOptions: [
        { ansText: "Au", isCorrect: true },
        { ansText: "Ag", isCorrect: false },
        { ansText: "Fe", isCorrect: false },
        { ansText: "Cu", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answerOptions: [
        { ansText: "China", isCorrect: false },
        { ansText: "Japan", isCorrect: true },
        { ansText: "India", isCorrect: false },
        { ansText: "South Korea", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      answerOptions: [
        { ansText: "Leonardo da Vinci", isCorrect: true },
        { ansText: "Pablo Picasso", isCorrect: false },
        { ansText: "Vincent van Gogh", isCorrect: false },
        { ansText: "Michelangelo", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "What is the largest organ in the human body?",
      answerOptions: [
        { ansText: "Liver", isCorrect: false },
        { ansText: "Heart", isCorrect: false },
        { ansText: "Brain", isCorrect: false },
        { ansText: "Skin", isCorrect: true },
      ],
    },
    {
      id: 6,
      question: "Which country is famous for the Great Wall of China?",
      answerOptions: [
        { ansText: "China", isCorrect: true },
        { ansText: "India", isCorrect: false },
        { ansText: "United States", isCorrect: false },
        { ansText: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answerOptions: [
        { ansText: "William Shakespeare", isCorrect: true },
        { ansText: "George Orwell", isCorrect: false },
        { ansText: "Mark Twain", isCorrect: false },
        { ansText: "Jane Austen", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "Which city is known as the 'Big Apple'?",
      answerOptions: [
        { ansText: "Los Angeles", isCorrect: false },
        { ansText: "New York City", isCorrect: true },
        { ansText: "Chicago", isCorrect: false },
        { ansText: "Miami", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "Which scientist developed the theory of general relativity?",
      answerOptions: [
        { ansText: "Isaac Newton", isCorrect: false },
        { ansText: "Albert Einstein", isCorrect: true },
        { ansText: "Charles Darwin", isCorrect: false },
        { ansText: "Stephen Hawking", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Which is the largest ocean on Earth?",
      answerOptions: [
        { ansText: "Atlantic Ocean", isCorrect: false },
        { ansText: "Indian Ocean", isCorrect: false },
        { ansText: "Arctic Ocean", isCorrect: false },
        { ansText: "Pacific Ocean", isCorrect: true },
      ],
    },
  ];
  

const [quesCount , setQuesCount]= useState(0);
const[ currentQues , setCurrentQues] = useState(allQuestions[quesCount]);
const [score , setScore] = useState(0);


useEffect(()=>{
    setCurrentQues(allQuestions[quesCount]);
    console.log("useEffect Running.....");
}, [quesCount])




  return (
    <div className="App">
      {
        (quesCount ===allQuestions.length) ? <div> <Result len={allQuestions.length} score={score}/> </div>:
        <Card sx={{ minWidth: 275 }} >  
          <CardContent>
              <Heading/>
              <Question num={currentQues.id} ques={currentQues.question}/>
              <Options setQuesCount={setQuesCount} alloptions={currentQues.answerOptions} setScore={setScore} setCurrentQues={setCurrentQues} />
          </CardContent>
        </Card>
      }

    </div>
  );
}

export default App;
