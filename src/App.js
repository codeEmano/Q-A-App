import React ,{ useState } from 'react';
import data from './data';
import Question from './questionsDisplay';
function App() {
  const [loggedIn,setLog]=useState(false);
  console.log("anoman",loggedIn);
  let [arr,changeStatusCheck]=useState(data)
  const changeStatus = () => {
    setLog(prevStat => !prevStat)
  }
  function handleChangeId(id) //the question id is passed here
  {
    console.log("id=",id)
    changeStatusCheck((prevArr) =>{
      console.log("changeStatusCheck",prevArr)
      let updArr=prevArr.map((data) =>{
        if(data.id===id)
          {
            console.log("if",data)
            let newData={answered:!data.answered,
              id: data.id,
              ansr: data.ansr,
              question: data.question,
              options: data.options
            }
            console.log("newData",newData)
              return newData}

      return data})
      console.log("anoman",updArr)
      return updArr;//necessary to return something in state else undefined will be returned that was the main problem
    })
    console.log("handleChange",arr)
  }
 // const display=useDisplay()
 console.log("arr= ",arr)

  const buttonDisplay= loggedIn ? "Log off" : "Log in"
    const newArr= arr && arr.map((data) =>  { console.log("map",arr)
  return (
      <Question quiz={data} key={data.id}
        handleChange={handleChangeId} />)})
  return (
    /*<div>
    <Question ques={data[0].question}
    op1={data[0].options[1]}
    op2={data[0].options[2]}
    op3={data[0].options[3]}
    />
    <Question ques={data[1].question}
    op1={data[1].options[1]}
    op2={data[1].options[2]}
    op3={data[1].options[3]}
    />
    <Question ques={data[2].question}
    op1={data[1].options[1]}
    op2={data[1].options[2]}
    op3={data[1].options[3]}
    />*/
    <div>
    {console.log("test",typeof(arr))}
    {console.log(newArr)}
    {newArr}
    <br />
    <button onClick={changeStatus}>{buttonDisplay}</button>
    </div>
  );
}

export default App;
