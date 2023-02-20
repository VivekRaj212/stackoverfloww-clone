// import React from 'react';
// import Questions from './Questions';

// const QuestionList = ({ questionList}) => {
//   return (
//     <>
//       {
//         questionList.map((question)=> {

//             return (
//                  <Questions question={question} key={question.id}/>
//             )
//         })
//       }
//     </>
//   )
// }

// export default QuestionList;

import React from "react";
import Questions from "./Questions";

const QuestionList = ({ questionList }) => {
  return (
    <>
      {questionList.map((question) => {
        return <Questions question={question} key={question._id} />;
      })}
    </>
  );
};

export default QuestionList;