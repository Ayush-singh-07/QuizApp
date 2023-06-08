import React from "react";


function Question(props){
    return (
        <div>
            <h2 className="ques" >Question {props.num}</h2>
            <h3>{props.ques}</h3>
        </div>
    )
}

export default Question;