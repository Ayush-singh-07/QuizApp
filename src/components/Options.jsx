import React from "react";
import Button from '@mui/material/Button';


function Options(props){

    function handleClick(idx){
        console.log("idx is: "+idx);
        if(props.alloptions[idx].isCorrect){
            props.setScore((prev)=>{
                return prev=prev+1;
            })
            props.setQuesCount(prev=>{
                return prev=prev+1;
            })
        }
        else{
            props.setQuesCount(prev=>{
                return prev=prev+1;
            })
        }
    }
    
    return (
        <div>
        {
            props.alloptions.map((elem, idx)=>{
                return <Button onClick={()=>handleClick(idx)} className="options" variant="outlined" color="primary">{elem.ansText}</Button>
            })
        }

        </div>
    )
}

export default Options;