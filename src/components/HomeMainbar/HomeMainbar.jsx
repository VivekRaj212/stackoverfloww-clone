import React from 'react';
import {Link, useLocation,useNavigate} from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from './QuestionList';


const HomeMainbar = () => {

  const navigate=useNavigate();
  const user= 1;

  const redirect=()=> {

        if(user === null)
        {  
          alert("Login or Signup to ask a Question")
           navigate("/auth")
        }
        else{
          navigate("/AskQuestion")
        }
  }
    
  var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
     }]

     const location= useLocation();

  return (
    <div className='main-bar'>
       <div className='main-bar-header'>
         {
          location.pathname === "/" ? <h1 style={{marginTop: "30px"}}>Top Questions</h1>: <h1 style={{marginTop: "30px"}}>All Questions</h1>
         }
         
         <button onClick={redirect}  className="ask-btn">Ask Questions</button>
         </div>
         <div>
            {
              questionsList === null ? <h1>Loading...</h1>: 
              <>
              <p style={{margin: "15px 0px"}}>{questionsList.length} questions</p>
              
               <QuestionList questionList={questionsList}/>
              
              </>
            }
         </div>
    </div>
  )
}

export default HomeMainbar;