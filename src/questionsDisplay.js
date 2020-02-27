import React from 'react'
function Question(props)
{
	//console.log("Question ",props)
	return (
		<div>
		<h4>{props.quiz.question}</h4>
		<br />
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id,props.quiz.options.op1.opid)} 
		/>{props.quiz.options.op1.opval}
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id,props.quiz.options.op2.opid)} 
		/>{props.quiz.options.op2.opval}
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id,props.quiz.options.op3.opid)} 
		/>{props.quiz.options.op3.opval}
		</div>
	)
}
	

export default Question