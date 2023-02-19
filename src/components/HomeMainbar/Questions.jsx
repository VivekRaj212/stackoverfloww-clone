import React from 'react';
import {Link} from "react-router-dom";


const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{question.upVotes}</p>
            <p>votes</p>
        </div>
        <div>
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-details'>
           <Link to={`/Questions/${question._id}`} className="question-title-link">{question.questionTitle}</Link>
           <div className='display-tags-time'>
               <div className='display-tags'>
                    {
                      question.questionTags.map((tag)=> {

                          return (
                              <p key={tag}>{tag}</p>
                          )
                      })
                    }
               </div>
           </div>
        </div>
        <div className='display-time'>
          <p>asked {question.askedOn} {question.userPosted}</p>
        </div>
        
    </div>
  )
}
export default Questions;
