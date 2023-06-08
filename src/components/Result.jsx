import React from "react";



function Result(props){
    return (<div>
        <h1>Your Score is {props.score}  out of {props.len} </h1>
    </div>);
}



export default Result;