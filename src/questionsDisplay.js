import React from 'react'
function Question(props)
{
	console.log("Question ",props)
	return (
		<div>
		<h4>{props.quiz.question}</h4>
		<br />
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id)} 
		/>{props.quiz.options[1]}
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id)} 
		/>{props.quiz.options[2]}
		<input type="checkbox" checked={props.quiz.answered}
		onChange={() =>	props.handleChange(props.quiz.id)} 
		/>{props.quiz.options[3]}
		</div>
		)
	}
	

export default Question